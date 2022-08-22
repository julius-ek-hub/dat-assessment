import useFetch from "./useFetch";

/**
 * @type {{
 * id: Number,
 * slug: String,
 * title: String,
 * category: String,
 * image: String,
 * price: Number,
 * currency: String,
 * availableQuantity: Number
 * }}
 */

export let category_data_props;

/**
 * @type {{
 * icon: String,
 * slug: String,
 * name: String,
 * }}
 */

export let category_props;

/**
 * @type {{
 * icon: String,
 * slug: String,
 * title: String,
 * description: String,
 * id: Number
 * }}
 */

export let contact_props;

function useLocalStorage() {
	const { get } = useFetch("http://54.169.31.224:3000");

	const getItemFromLocalStorage = (key) => {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : value;
	};
	const saveItemToLocalStorage = (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

	/**
	 * Tries to fetch categories from localStorage. If failure then fetch from api
	 * @returns {Promise<[category_props]>}
	 */

	const getCategories = async () => {
		const categories = getItemFromLocalStorage("categories");
		if (categories) return categories;

		const { data } = await get("/category");

		saveItemToLocalStorage("categories", data);

		return data;
	};

	/**
	 * Tries to fetch category data from localStorage. If failure then fetch from api
	 * @param {String} slug
	 * @returns {Promise<category_data_props>}
	 */

	const getCategoryData = async (slug) => {
		const category_data = getItemFromLocalStorage("category_data") || {};
		if (category_data[slug]) return category_data[slug];

		const { data } = await get(`/category/${slug}`);
		category_data[slug] = data;

		saveItemToLocalStorage("category_data", category_data);
		return data;
	};

	/**
	 * Tries to fetch contacts from localStorage. If failure then fetch from api
	 * @returns {Promise<[contact_props]>}
	 */

	const getContacts = async () => {
		const contact = getItemFromLocalStorage("contact");
		if (contact) return contact;

		const { data } = await get("/contact");

		saveItemToLocalStorage("contact", data);

		return data;
	};

	return {
		getCategoryData,
		getCategories,
		getContacts,
		saveItemToLocalStorage,
		getItemFromLocalStorage,
	};
}

export default useLocalStorage;
