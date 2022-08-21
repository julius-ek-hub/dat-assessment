import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		reduceItem(state, { payload }) {
			const targetItem = state.cart.find((c) => c.slug === payload.slug);
			if (targetItem.quantity <= 1)
				state.cart = state.cart.filter((c) => c.slug !== payload.slug);
			else targetItem.quantity--;
		},
		increaseItem(state, { payload }) {
			state.cart.find((c) => c.slug === payload.slug).quantity++;
		},
		addItem(state, { payload }) {
			state.cart.push({ ...payload, quantity: 1 });
		},
		removeItem(state, { payload }) {
			state.cart = state.cart.filter((c) => c.slug !== payload.slug);
		},
	},
});

export const { addItem, reduceItem, increaseItem, removeItem } =
	cartSlice.actions;

export default cartSlice.reducer;
