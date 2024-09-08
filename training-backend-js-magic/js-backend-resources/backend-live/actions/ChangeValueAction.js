var ChangeValueAction = function () {
    this.execute = function () {
        if (this.content.isNode()) {
            this.content.setProperty(this.parameters.propertyName, this.parameters.propertyValue);
            this.content.getSession().save();
        }
    }
}

new ChangeValueAction();