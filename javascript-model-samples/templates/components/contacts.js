/* eslint-disable no-undef */
// load paginator library
loadScript("/javascript-model-samples/templates/js/paginator.js");

/**
 * Javascript model.
 *
 * @constructor
 */
var ContactsBrowser = function () {

	var paginator = new Paginator();
	var ordering = {};

	/**
	 * Sets up paginator and ordering for the contacts browser.
	 */
	this.execute = function () {
		var page = ctx.getParameter("page") ? ctx.getParameter("page") : 1;
		var contacts = this._search();
		if (this._isInt(page)) {
			paginator.setItemCount(contacts.getSize());
			paginator.setItemsPerPage(3);
			paginator.setPage(page);
		}

		var orderBy = ctx.getParameter("orderBy") ? ctx.getParameter("orderBy") : "firstName";
		var order = ctx.getParameter("order") ? ctx.getParameter("order") : "asc";
		ordering = {
			"orderBy": orderBy,
			"order": order
		};
	};

	/**
	 * Returns contacts from the contacts workspace based on the paginator's parameters.
	 *
	 * @returns {javax.jcr.NodeIterator}
	 */
	this.getContacts = function () {
		return this._search(paginator.getLength(), paginator.getOffset());
	};

	/**
	 * Returns paginator instance.
	 *
	 * @returns {Paginator}
	 */
	this.getPaginator = function () {
		return paginator;
	};

	/**
	 * Creates link to the passed node with defined query string parameters. If query string already exists, it's parameters
	 * are preserved (or updated).
	 *
	 * @param node
	 * @param params
	 * @returns {string}
	 */
	this.link = function (node, params) {
		var queryString = this._createQueryString(params);
		var link;
		if (queryString === null) {
			link = cmsfn.link(cmsfn.page(node));
		} else {
			link = cmsfn.link(cmsfn.page(node)) + "?" + queryString;
		}
		return link;
	};

	/**
	 * Gets contacts from the JCR workspace.
	 *
	 * @param limit
	 * @param offset
	 * @returns {javax.jcr.NodeIterator}
	 * @private
	 */
	this._search = function (limit, offset) {
		var queryManager = ctx.getJCRSession("contacts").getWorkspace().getQueryManager();
		var sql = "select * from [mgnl:contact] order by " + ordering.orderBy + " " + (ordering.order === "asc" ? "asc" : "desc");
		var query = queryManager.createQuery(sql, "JCR-SQL2");
		if (limit) {
			query.setLimit(limit);
		}
		if (offset) {
			query.setOffset(offset);
		}
		return query.execute().getNodes();
	};

	/**
	 * Creates query string by aggregating passed query string parameters and existing query string.
	 *
	 * @param params
	 * @returns {string}
	 * @private
	 */
	this._createQueryString = function (params) {
		var queryString = ctx.getAggregationState().getQueryString();
		var obj = {};
		if (queryString !== null) {
			queryString.replace(/([^=&]+)=([^&]*)/g, function (m, key, value) {
				obj[decodeURIComponent(key)] = decodeURIComponent(value);
			});
		}
		for (var key in params) {
			if (params.containsKey(key)) {
				obj[key] = params[key];
			}
		}
		var str = [];
		for (var p in obj) {
			if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		}
		return str.join("&");
	};

	/**
	 * Checks whether passed value is integer or not.
	 *
	 * @param value
	 * @returns {boolean}
	 * @private
	 */
	this._isInt = function isInt(value) {
		var x = parseFloat(value);
		return !isNaN(value) && (x | 0) === x;
	};
};

new ContactsBrowser();
