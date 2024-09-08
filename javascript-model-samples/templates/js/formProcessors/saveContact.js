/* eslint-disable no-undef */
/**
 * Form processor that creates new contact in contacts workspace.
 * @constructor
 */
var Processor = function () {

	this.process = function (content, parameters) {
		this._saveContact(parameters, ctx.getPostedForm().getDocument("photo"))
	}

	/**
	 * Formats contact name.
	 *
	 * @param firstName
	 * @param lastName
	 * @returns {string}
	 * @private
	 */
	this._contactName = function (firstName, lastName) {
		var contactName = firstName.substring(0, 1) + lastName.replace(/ /g,"");
		return contactName.toLowerCase();
	}

	/**
	 * Creates resource node under contact containing the uploaded photo.
	 *
	 * @param contact
	 * @param document
	 * @private
	 */
	this._createBinary = function (contact, document) {
		var resource = contact.addNode("photo", "mgnl:resource");
		resource.setProperty("fileName", document.getFileName());
		resource.setProperty("extension", document.getExtension());
		resource.setProperty("jcr:mimeType", document.getType());
		resource.setProperty("jcr:data", document.getStream());
	}

	/**
	 * Saves contact into contacts workspace.
	 * This method does not check for illegal characters or if generated name is unique - for sake of simplicity.
	 *
	 * @param values
	 * @param document
	 * @returns {boolean}
	 * @private
	 */
	this._saveContact = function (values, document) {
		try {
			var contact = ctx.getJCRSession("contacts").getRootNode().addNode(this._contactName(values.firstName, values.lastName), "mgnl:contact");
			contact.setProperty("firstName", values.firstName);
			contact.setProperty("lastName", values.lastName);
			contact.setProperty("organizationName", values.organization);
			contact.setProperty("email", values.email);
			this._createBinary(contact, document);
			contact.getSession().save();
			return true;
		} catch (e) {
			return false;
		}
	};

}

new Processor();
