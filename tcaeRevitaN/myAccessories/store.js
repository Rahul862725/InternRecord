import { configureStore } from "@reduxjs/toolkit";
import Accesories from "./Reducers/Accesories";
import Id from "./Reducers/Id";
import Notes from "./Reducers/Notes";

export default store=configureStore({
    reducer:{
        options:Accesories,
        notes:Notes,
        id:Id
    }
})