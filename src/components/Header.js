import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from '../redux/productAction';

const Header = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.cartData)
    console.log('redux data in header', result);
    return (
        <div className="header">
            <Link to='/'>
                <h1 className="logo">E-Comm</h1>
            </Link>
            <div className="search-box">
                <input type='text' onChange={(event) => dispatch(productSearch(event.target.value))} placeholder="search product" />
            </div>
            <Link to='/cart'>
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Header