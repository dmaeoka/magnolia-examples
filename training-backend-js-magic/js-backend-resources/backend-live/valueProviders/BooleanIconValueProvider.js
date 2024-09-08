var BooleanIcon = function () {
    this.apply = function(item) {
        if (!item.isNode()) {
            return null;
        }

        const itemAsMap = cmsfn.asContentMap(item);
        const isLocked = itemAsMap ? itemAsMap['locked'] : undefined;

        if (isLocked) {
            if (this.parameters.containsKey('trueImg')) {
                return this.parameters['trueImg'];
            }
        } else if (this.parameters.containsKey('falseImg')) {
            return this.parameters['falseImg'];
        }

        return "";
    }
}

new BooleanIcon();