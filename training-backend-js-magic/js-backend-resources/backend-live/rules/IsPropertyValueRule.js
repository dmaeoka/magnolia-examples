var IsPropertyValueRule = function () {
    this.isAvailableFor = function (obj) {
        const itemAsMap = cmsfn.asContentMap(obj);
        // Remember, null-safety.
        const existingValue = itemAsMap ? itemAsMap[this.parameters.propertyName] : undefined;
        if (existingValue === undefined || existingValue === this.parameters.propertyValue) {
            return true;
        }
        return false;
    }
}

new IsPropertyValueRule();