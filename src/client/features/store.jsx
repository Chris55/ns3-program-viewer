import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./menu/menu-slice-reducer";
import nordSliceReducer from "./nord/nord-slice-reducer";

export const store = configureStore({
    reducer: {
        menuStore: menuSliceReducer,
        nordStore: nordSliceReducer,
    },
});
