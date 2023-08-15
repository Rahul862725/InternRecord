import { createSlice } from "@reduxjs/toolkit";

const setOp1=createSlice({
    name:"op",
    initialState:{
        op:""
    },
    reducers:{
        appendOp:(state,action)=>{
             state.op+=action.payload
        },
        setOp:(state,action)=>{
            state.op=action.payload
       },
        emptyOp:(state)=>{
            state.op=""
            return state
        }

    }
})

export default setOp1.reducer;

export const {setOp,emptyOp,appendOp}=setOp1.actions
 
//6+4 ==> 64


//3

// add(4) op="{operartion}" ""
//store.dispatch(add)