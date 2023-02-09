import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData)
  console.log('redux data in main', data);
  useEffect(()=>{
    dispatch(productList())
  }, [])
  return (
    <div>
        <div>
            <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        </div>
        <div className='product-container'>
          {data.map((item) => 
            <div className='product-item' key={item.id}>
              <img src={item.photo} alt='' width='100px' />
              <div>Name: {item.name}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
              </div>
            </div>
          )}
        </div>
    </div>
  );
}

export default Main;
