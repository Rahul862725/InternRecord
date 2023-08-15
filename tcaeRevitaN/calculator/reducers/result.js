import { createSlice } from "@reduxjs/toolkit";

const setResult=createSlice({
    name:"result",
    initialState:{
        result:0
    },
    reducers:{
        appendRes:(state,action)=>{
             state.resul+=action.payload
        }, 
        setRes:(state,action)=>{
            state.result=action.payload
       },
        emptyRes:(state)=>{
            state.result=0
            return state;
        }

    }
})
export default  setResult.reducer;
export const {setRes, emptyRes} = setResult.actions
 

//6+4 ==> 64


//3

// add(4) op="{operartion}" ""
//store.dispatch(add)