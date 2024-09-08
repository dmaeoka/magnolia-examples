/* eslint-disable no-undef */
// load rest client lib
loadScript("/javascript-model-samples/templates/js/restClient.js");

/**
 * Javascript model.
 *
 * @constructor
 */
var Model = function () {

	/**
	 * See https://jsonplaceholder.typicode.com/
	 *
	 * @type {string}
	 */
	var baseUrl = "https://jsonplaceholder.typicode.com";

	var restClient = new RestClient();

	/**
	 * Returns all posts from the JSON Placeholder service.
	 *
	 * @returns {JSON object}
	 */
	this.getPosts = function () {
		return JSON.parse(restClient.get(baseUrl + "/posts"));
	};

	/**
	 * Creates new post in the JSON Placeholder service.
	 *
	 * @param data
	 * @returns {JSON object}
	 */
	// this.createPost = function (data) {
	// 	return JSON.parse(restClient.post(baseUrl + "/posts", data));
	// };
}

new Model();
