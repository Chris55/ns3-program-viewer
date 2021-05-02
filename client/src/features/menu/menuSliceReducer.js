import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeKey: "home",
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setActiveKey: (state, { payload }) => {
            state.activeKey = payload;
        },
    },
});

export const { setActiveKey } = menuSlice.actions;

export const menuSelector = (state) => state.menuStore;

export default menuSlice.reducer;
