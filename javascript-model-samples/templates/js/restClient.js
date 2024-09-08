/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * Simple implementation of REST library. Since Nashorn doesn't support XMLHttpRequest, it's implemented using
 * Apache HTTP client.
 *
 * Be aware that this implementation of http requests is synchronous.
 * Using these methods could have negative performance implications for your site.
 *
 * Consider making http requests from the client side if possible.
 * Consider a more sophisticated implementation in Java with caching, buffering requests, etc.
 *
 * @constructor
 */

var RestClient = function () {

	var HttpClients = Java.type("org.apache.http.impl.client.HttpClients");
	var HttpGet = Java.type("org.apache.http.client.methods.HttpGet");
	var HttpPost = Java.type("org.apache.http.client.methods.HttpPost");

	var ArrayList = Java.type("java.util.ArrayList");
	var UrlEncodedFormEntity = Java.type("org.apache.http.client.entity.UrlEncodedFormEntity");
	var BasicNameValuePair = Java.type("org.apache.http.message.BasicNameValuePair");
	var EntityUtils = Java.type("org.apache.http.util.EntityUtils");

	this.get = function (url) {
		var httpClient = HttpClients.createDefault();
		var httpGet = new HttpGet(url);
		var response = httpClient.execute(httpGet);

		try {
			entity = response.getEntity();
			return EntityUtils.toString(entity, "utf-8");
		} finally {
			response.close();
		}
	}

	this.post = function (url, params) {
		var httpClient = HttpClients.createDefault();
		var httpPost = new HttpPost(url);
		var data = new ArrayList();

		for (var key in params) {
			data.add(new BasicNameValuePair(key, params[key]));
		}

		httpPost.setEntity(new UrlEncodedFormEntity(data));
		response = httpClient.execute(httpPost);

		try {
			entity = response.getEntity();
			return EntityUtils.toString(entity, "utf-8");
		} finally {
			response.close();
		}
	}
}
