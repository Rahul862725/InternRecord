import { createSlice } from "@reduxjs/toolkit";

const StoreNotes=createSlice({
    name:'Notes',
    initialState:[],
    reducers:{
        setNotes:(state,action)=>{
            state.push(action.payload)
        },
        deleteNotesById:(state,action)=>{
            return state.filter(el=>el.Id!=action.payload)
        },
        deleteAll:(state)=>{
            return []
        }
    }
})

export default StoreNotes.reducer;
export const {setNotes,deleteAll,deleteNotesById}=StoreNotes.actions;