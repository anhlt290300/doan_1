import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from "./productModalSlice";
import cartItemsSlide from "./shopping-cart/cartItemsSlide";
import btnSearchSlide from "./btnSearchSlide";
export const store = configureStore({
    reducer:{
        productModal: productModalSlice,
        cartItems: cartItemsSlide,
        btnSearch: btnSearchSlide
    }
})