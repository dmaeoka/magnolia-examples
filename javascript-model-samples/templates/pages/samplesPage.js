// load utils
loadScript("/javascript-model-samples/templates/js/utils.js");

/**
 * Just a dummy model to check base function and to see get (also to get it as parent model calling it from a model within component template).
 * @constructor
 */
var Dumbo = function () {

	this.happinessLevel = Math.ceil(Math.random() * 100);

	var utils = new Utils();

	/**
	 * Returns a "page info" string with the author and the last modified date.
	 */
	this.getPageInfo = function (pageNode) {
		var pageCreator = pageNode["mgnl:createdBy"];
		var modificationDate = utils.formatDate(pageNode["mgnl:lastModified"]);
		return i18n.translate("javascript-model-samples.frontend.footer.pageInfo.label", pageCreator, modificationDate);
	};

	/**
	 * Another dummy method.
	 */
	this.getHappinessLevel = function () {
		return i18n.translate("javascript-model-samples.frontend.footer.happinessLevel.label", this.happinessLevel);
	};

	/**
	 * This method renders a simple breadcrumbs navigation.
	 */
	this.renderBreadcrumbs = function (pageNode) {
		var res = i18n.translate('javascript-model-samples.frontend.breadcrumbs.start.label');
		cmsfn.ancestors(pageNode).forEach(function (anchestorPage) {
			res += '<span><a href="' + cmsfn.link(anchestorPage) + '">' + evalBreadcrumbItitle(anchestorPage) + '</a></span><span>&gt;&gt;</span>';
		});
		res += '<span>' + evalBreadcrumbItitle(pageNode) + '</span>';
		return res;
	};

	function evalBreadcrumbItitle(pageNode) {
		return (pageNode.navigationTitle) ? pageNode.navigationTitle : (pageNode.title) ? pageNode.title : pageNode["@name"];
	}//-


};
new Dumbo();
