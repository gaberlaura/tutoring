import { combineReducers } from "redux";//this method allows us to create a final big reducer by combining smaller reducers

import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

//the final state shape will be this object with different key/value pairs calling different reducers 
export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})