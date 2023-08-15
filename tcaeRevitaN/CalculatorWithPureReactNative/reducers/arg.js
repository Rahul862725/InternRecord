import { createSlice } from "@reduxjs/toolkit";

const setArg1=createSlice({
    name:"arg",
    initialState:{
        arg:""
    },
    reducers:{
        appendArg:(state,action)=>{
             state.arg+=action.payload
             console.log("Call",action)
             return state;
        },
        setArg:(state,action)=>{
            state.arg=action.payload
            console.log("Call",action)
            return state;
       },
        emptyArg:(state)=>{
            state.arg=""
            return state;
        }
      
    }
})

export default setArg1.reducer
export const {setArg,emptyArg,appendArg} =setArg1.actions

 

// ""+"3"==>"3"
//"3"+"4"==>"34"

// add(4)
//store.dispatch(add)