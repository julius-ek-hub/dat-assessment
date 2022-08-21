/**
 * @param {String} baseURL
 * @param {Boolean} raw If set to true, will return the unserialized response from the fetch.
 * else will return json object
 */

function useFetch(baseURL = "", raw) {
	const _fetch = async (endpoint, config) => {
		const result = await fetch(`${baseURL + endpoint}`, config);
		return raw ? result : result.json();
	};

	/**
	 * @param {String} endpoint
	 */

	const get = (endpoint) => _fetch(endpoint);

	/**
	 * @param {String} endpoint
	 * @param {any} body
	 */

	const post = (endpoint, body) =>
		_fetch(endpoint, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

	return { get, post };
}

export default useFetch;
