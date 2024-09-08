/**
 * A dummy JavaScript class to demonstrate some built-in model properties.
 *
 * @constructor
 */
var DemoModel = function () {
    /**
     * Whithin the model JS file, when using model properties, you must use <code>this</code> to reference the model.
     */
    this.demonstrateBuiltInProperties = function () {
        var res = "<pre>";
        res += "Current Template name = " +this.definition.name +"\n";
        res += "Parent Template name = " +this.parent.definition.name +"\n";
        res += "Current node path = " +this.content['@path']  +"\n";
        res += "Parent node path = " +this.parent.content['@path']  +"\n";
        res += "Page info by using method of the parent model: "+ this.parent.getPageInfo(this.parent.content)+"\n";
        res += "</pre>";
        return res;
    }
};

new DemoModel();
