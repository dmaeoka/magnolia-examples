/* eslint-disable no-undef */
// load validatejs.org library for fields validation
// load("https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.11.1/validate.js")
loadScript("/javascript-model-samples/templates/js/validate.js");

/**
 * Javascript model.
 * @constructor
 */
var Model = function () {

	var errors = {};

	/**
	 * Execute function is fired before component is rendered.
	 * We check whether form was submitted using submit button and if yes, we validate user's input.
	 * If there are validation errros, we return them as a JSON string.
	 * If validation passed, we will try to create new contact and return JSON containig information whether creation
	 * was successful or not.
	 *
	 * @returns {string}
	 */
	this.execute = function () {
		var params = ctx.getParameters();
		if (params.containsKey("submit")) {
			this._validateFirstName(params);
			this._validateLastName(params);
			this._validateOrganization(params);
			this._validateEmail(params);
			this._validatePhoto();
			if (Object.keys(errors).length !== 0) {
				return JSON.stringify(errors);
			}
			if (this._saveContact(params, ctx.getPostedForm().getDocument("photo"))) {
				return "{\"success\": 1}";
			} else {
				return "{\"success\": 0}";
			}
		}
		return "";
	};

	/**
	 * Validate that first name is present.
	 *
	 * @param values
	 * @private
	 */
	this._validateFirstName = function (values) {
		var res = validate({firstName: values.firstName}, {firstName: {presence: true}});
		if (res) {
			errors.firstName = res.firstName;
		}
	};

	/**
	 * Validate that last name is present.
	 *
	 * @param values
	 * @private
	 */
	this._validateLastName = function (values) {
		var res = validate({lastName: values.lastName}, {lastName: {presence: true}});
		if (res) {
			errors.lastName = res.lastName;
		}
	};

	/**
	 * Validate that organization is present.
	 *
	 * @param values
	 * @private
	 */
	this._validateOrganization = function (values) {
		var res = validate({organization: values.organization}, {organization: {presence: true}});
		if (res) {
			errors.organization = res.organization;
		}
	}

	/**
	 * Validate that email is present and entered value is really an email address.
	 *
	 * @param values
	 * @private
	 */
	this._validateEmail = function (values) {
		var res = validate({email: values.email}, {email: {presence: true, email: true}});
		if (res) {
			errors.email = res.email;
		}
	};

	/**
	 * Validate whether inserted document is JPEG or PNG image.
	 * Magnolia is storing uploaded files using info.magnolia.cms.beans.runtime.MultipartForm Java object.
	 * We obtain submitted file from the MultipartForm and validate it's type.
	 *
	 * @see info.magnolia.cms.beans.runtime.Document
	 * @private
	 */
	this._validatePhoto = function () {
		var postedForm = ctx.getPostedForm();
		if (postedForm) {
			var document = postedForm.getDocument("photo");
			if (document) {
				var types = ["image/jpeg", "image/png"];
				var res = validate({type: document.getType()}, {type: {inclusion: types}});
				if (res) {
					errors.photo = res.type;
				}
			}
		}
	};

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
		if (document) {
			var resource = contact.addNode("photo", "mgnl:resource");
			resource.setProperty("fileName", document.getFileName());
			resource.setProperty("extension", document.getExtension());
			resource.setProperty("jcr:mimeType", document.getType());
			resource.setProperty("jcr:data", document.getStream());
		}
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
			console.log(contact);

			contact.getSession().save();
			return true;
		} catch (e) {
			e.printStackTrace();
			return false;
		}
	};

	/**
	 * Takes JSON string and parses it into JSON object.
	 *
	 * @param jsonString
	 * @returns {JSON object}
	 */
	this.parse = function (jsonString) {
		if (jsonString) {
			return JSON.parse(jsonString);
		}
		return {};
	}
}

// create the model class
new Model();
