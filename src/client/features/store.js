import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./menu/menu-slice-reducer.js";
import nordSliceReducer from "./nord/nord-slice-reducer.js";

export const store = configureStore({
    reducer: {
        menuStore: menuSliceReducer,
        nordStore: nordSliceReducer,
    },
});
