import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";


const StoreMessage=createSlice({
    name:"message",
    initialState:[],
    reducers:{
        pushMessage:(state,action)=>
        {
            state.push(action.payload)
        },
        setMessage:(state,action)=>{
            return act.payload
        }
    }
})

export default StoreMessage.reducer;
export const {pushMessage,setMessage}=StoreMessage.actions;