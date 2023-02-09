import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('Reducer: ADD_TO_CART', action);
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.log('Reducer: REMOVE_FROM_CART', action);
            const remainingItem = data.filter(p => p.id !== action.data);
            return [...remainingItem]
        case EMPTY_CART:
            console.log('Reducer: EMPTY_CART', action);
            data = [];
            return [...data]
        default:
            return data
    }
}