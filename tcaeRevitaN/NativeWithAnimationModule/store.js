import { configureStore } from "@reduxjs/toolkit";
import StoreMessage from './Reducers/Message'

export default store=configureStore({
    reducer:{
        message:StoreMessage
    }
})