/* eslint-disable no-undef */

// load utils
loadScript("/javascript-model-samples/templates/js/utils.js");


/**
 * A javascript object to render some info concerning the so called "rendering context objects".
 *
 * @constructor
 */
var RCO = function () {

    var TABLE_START = "<table class='table table-striped'>";
    var TABLE_END = "</tbody></table>";

    var utils = new Utils();

    /**
     * Creates HTML code for a table displaying all the properties of the content object.
     */
    this.getContentPropertiesTable = function (contentObject, selectedKeys) {
        return createPropertiesTable(contentObject, selectedKeys, ["key", "value"]);
    },


    /**
     * Creates HTML code for a table displaying some properties of the template definition object.
     */
    this.showTemplateInformations = function () {
        var res = startTable([]);
        res = addTableRow(res, "renderType", def.renderType);
        res = addTableRow(res, "templateScript", def.templateScript);
        res = addTableRow(res, "dialog", def.dialog);
        res = addTableRow(res, "modelClass", def.modelClass);
        // parameters
        if (def.parameters && def.parameters.size > 0) {
            var parametersInfo = "";
            for (var key in def.parameters) {
                var value = def.parameters[key];
                parametersInfo += key + "=" + value + "<br/>";
            }
            res = addTableRow(res, "parameters", parametersInfo);
        } else {
            res = addTableRow(res, "parameters", "No custom parameters are set on this template definition.");
        }

        res += TABLE_END;
        return res;
    },

    /**
     * Creates HTML code for a table displaying some properties of the ctx object.
     */
    this.getContextInfo = function () {
        var res = startTable([]);

        res = addTableRow(res, "user.name", ctx.user.name);
        res = addTableRow(res, "locale", ctx.locale);
        if (ctx.aggregationState != null) {
            res = addTableRow(res, "aggregationState.channel.name", ctx.aggregationState.channel.name);
            res = addTableRow(res, "contextPath", ctx.contextPath);
            res = addTableRow(res, "servletContext", ctx.servletContext);
        }

        res += TABLE_END;
        return res;
    },

    /**
     * Creates HTML code for a table displaying some properties of the state object.
     */
    this.getAggregationStateInfos = function () {
        var res = startTable([]);
        if (state != null) {
            res = addTableRow(res, "originalURI", state.originalURI);
            res = addTableRow(res, "currentURI", state.currentURI);
            res = addTableRow(res, "queryString", state.queryString);
            res = addTableRow(res, "mainContentNode", state.mainContentNode);
            res = addTableRow(res, "templateName", state.templateName);
            res = addTableRow(res, "locale", state.locale);
            res = addTableRow(res, "channel", state.channel);
            res = addTableRow(res, "channel.name", state.channel.name);
        }
        res += TABLE_END;
        return res;
    }


    function addTableRow(buffer, key, value) {
        buffer += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
        return buffer;
    }

    function startTable(headerLabels) {
        var res = TABLE_START + "<thead>";
        headerLabels.forEach(function (label) {
            res += "<th>" + label + "</th>";
        });
        res += "</thead>";
        res += "<tbody>";
        return res;
    }

    function createPropertiesTable(contentMap) {
        var res = startTable(["key", "value"]);

        // adding the  "special properties" first ...
        var allKeys = ["@name", "@id", "@path", "@depth", "@nodeType"]; //specialProperties;
        for (var key in contentMap) {
            allKeys.push(key);
        }

        for(var i=0; i<allKeys.length; i++){
            var key2 = allKeys[i];
            var value = contentMap[key2];
            if (value instanceof Java.type("java.util.GregorianCalendar")) {
                value = utils.formatDate(value);
            }
            if (key2 === "@nodeType") {
                value = value.getName();
            }
            res = addTableRow(res, key2, value);
        }

        res += TABLE_END;
        return res;
    }


};

new RCO();
