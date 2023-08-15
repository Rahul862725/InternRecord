import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-test-renderer"; 

const NavbarHeading=createSlice({
    name:"navabarHeading",
    initialState:[],
    reducers:{
        pushHeading:(state,action)=>{
            if(state.length>=7)
            state=[]
            state.push(action.payload)
          
        },
        clearHeading:(state )=>{
             return []
        },
        updateHeading:(state,action)=>{
            // console.log(action.payload)
            // return state.map(el=>(el.data==action.payload.data)?({data:el.data,weight:action.payload.weight}):el)
            return action.payload
        }
    }
})

export default NavbarHeading.reducer
export const {pushHeading,clearHeading,updateHeading }=NavbarHeading.actions