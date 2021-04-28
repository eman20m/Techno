import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {productCreateReducer, productDeleteReducer, productDetailsReducer, productReviewCreateReducer, productListReducer, productUpdateReducer,productCategoryListReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {userDetailsReducer, userUpdateProfileReducer, userSigninReducer, userRegisterReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers';
import {orderCreateReducer, orderDetailsReducer, orderDeliverReducer, orderPayReducer, orderListReducer, orderDeleteReducer} from './reducers/orderReducers';

const initialState={
  userSignin:{
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
  cart:{
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {},
    paymentMethod: localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : '',
    shippingDetails: localStorage.getItem('shippingDetails') ? JSON.parse(localStorage.getItem('shippingDetails')) : '',
  }
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    productCategoryList: productCategoryListReducer,
    productReviewCreate: productReviewCreateReducer,
    
})

const store=createStore(reducer,initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;
