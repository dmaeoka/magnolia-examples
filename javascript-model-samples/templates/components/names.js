/**
 * JavaScript Model
 *
 * @constructor
 */
var Names = function () {

	/**
	 * Returns couple of english names (generated using https://www.behindthename.com/random/ tool)
	 *
	 * @returns {[*,*,*,*]}
	 */
	this.getNames = function () {
		return [
			{firstName: "Ingram", lastName: "Kevinson"},
			{firstName: "Winslow", lastName: "Samson"},
			{firstName: "Leroi", lastName: "Pierson"},
			{firstName: "Eliza", lastName: "Robbins"}
		]
	}
};

new Names();
