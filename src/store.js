import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./reducer";

const store=configureStore({

    reducer:{
        khudkaReducer:customReducer
    },


});
export default store;