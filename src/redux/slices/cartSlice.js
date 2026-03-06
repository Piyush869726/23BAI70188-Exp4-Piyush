import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },

        updateQty: (state, action) => {
            const item = state.items.find(
                item => item.id === action.payload.id
            );
            if (item) item.qty = action.payload.qty;
        }

    }
});

export const { addItem, removeItem, updateQty } = cartSlice.actions;

export default cartSlice.reducer;