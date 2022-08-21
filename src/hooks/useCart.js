import { useSelector, useDispatch } from "react-redux";
import {
	addItem,
	increaseItem,
	reduceItem,
	removeItem,
} from "../features/cartSlice";

import { category_data_item_props } from "./useLocalStorage";

/**
 * @type {category_data_item_props & {quantity: Number}}
 */

export let cart_data_props;

const useCart = () => {
	const dispatch = useDispatch();

	const { cart } = useSelector(({ cart }) => cart);

	/**
	 * Returs true if item is found in the cart
	 * @param {typeof cart_data_props} item
	 */

	const inCart = (item) => Boolean(cart.find((c) => c.slug === item.slug));

	/**
	 * @param {typeof cart_data_props} item
	 */

	const add = (item) => {
		if (
			item.availableQuantity === 0 ||
			item.availableQuantity < Number(item.quantity)
		)
			return;

		if (inCart(item)) return dispatch(increaseItem(item));

		dispatch(addItem(item));
	};

	/**
	 * @param {typeof cart_data_props} item
	 * @param {Boolean} permanently_delete
	 */

	const remove = (item, permanently_delete) => {
		if (permanently_delete) return dispatch(removeItem(item));
		if (inCart(item)) dispatch(reduceItem(item));
	};

	const count = cart.map((c) => c.quantity).reduce((a, b) => a + b, 0);
	const totalCost = cart
		.map((c) => c.quantity * c.price)
		.reduce((a, b) => a + b, 0);

	return {
		/**
		 * @type {Array.<cart_data_props>}
		 */
		cart,
		add,
		remove,
		/**
		 * @type {Number}
		 */
		count,
		/**
		 * @type {Number}
		 */
		totalCost,
		inCart,
	};
};

export default useCart;
