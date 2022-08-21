import { createSlice } from "@reduxjs/toolkit";

const extraSlice = createSlice({
	name: "extra",
	initialState: {
		theme: "light",
		fakeImageLoading: false,
	},
	reducers: {
		setValue(state, { payload }) {
			state[payload.key] = payload.value;
		},
	},
});

export const { setValue } = extraSlice.actions;

export default extraSlice.reducer;
