var IsTemplateRule = function () {
    this.isAvailableFor = function (obj) {
        const nodeToCheck = cmsfn.asContentMap(obj);
        // Must use Null-Safety to make sure something is returned.
        const templateId = nodeToCheck ? nodeToCheck['mgnl:template'] : '';
        if (this.parameters.templates.containsValue(templateId)) {
            return true;
        }
        return false;
    }
}

new IsTemplateRule();