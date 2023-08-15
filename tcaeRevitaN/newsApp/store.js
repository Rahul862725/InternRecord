import { configureStore } from "@reduxjs/toolkit";
import NavbarHeading from "./Reducers/navbarHeading";
import Articles from "./Reducers/articles";
 

export default store=configureStore({
    reducer:{
        navCo:NavbarHeading,
        articles:Articles,
        
    }
})