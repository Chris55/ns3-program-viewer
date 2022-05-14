import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./menu/menuSliceReducer";
import nordSliceReducer from "./nord/nordSliceReducer";

export const store = configureStore({
    reducer: {
        menuStore: menuSliceReducer,
        nordStore: nordSliceReducer,
    },
});
