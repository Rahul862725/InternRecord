import { configureStore } from "@reduxjs/toolkit";
import resultReducer  from './reducers/result'
import opReducer from './reducers/op'
import argReducer from './reducers/arg'

export default store=configureStore({
     reducer:{
        result:resultReducer,
        op:opReducer,
        arg:argReducer
     }
})
