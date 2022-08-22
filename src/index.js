import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";

import cart from "./features/cartSlice";
import extra from "./features/extraSlice";

const store = configureStore({ reducer: { cart, extra } });

const root = createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
