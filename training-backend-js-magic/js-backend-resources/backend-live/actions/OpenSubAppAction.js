var OpenSubAppAction = function () {
    this.execute = function () {
        let pathToOpen = "/";
        const NodeUtil = Java.type("info.magnolia.jcr.util.NodeUtil");
        const NodeTypes = Java.type("info.magnolia.jcr.util.NodeTypes");

        const DefaultLocation = Java.type("info.magnolia.ui.api.location.DefaultLocation");
        const Location = Java.type("info.magnolia.ui.api.location.Location");

        this.logSomething();
        this.logSomethingElse();

        let jcrItem = this.content;
        if (!jcrItem.isNode()) {
            jcrItem = jcrItem.getParent();
        }
        const isContent = NodeUtil.isNodeType(jcrItem, NodeTypes.Content.NAME);
        if (isContent || (this.parameters.containsKey("useContentSubNodes") && this.parameters.get("useContentSubNodes") === true))  {
            pathToOpen = jcrItem.getPath();
        } else {
            pathToOpen = cmsfn.parent(jcrItem, NodeTypes.Content.NAME).getPath();
            this.log.info("Current node is either not content or useContentSubNodes was set to false: ID: {} pathToOpen {}", this.content.getItemId().toString(), pathToOpen);
        }
        
        const addToLocationParameter = this.parameters.get("addToLocationParameter");
        
        if (addToLocationParameter != null){
            pathToOpen += this.parameters.get("addToLocationParameter");
        }

        const location = new DefaultLocation(Location.LOCATION_TYPE_APP, this.parameters.get("appName"), this.parameters.get("subAppId"), pathToOpen);

        this.log.info("Moving to {} in the {} app.", pathToOpen, this.parameters.get("appName"));
        locationController.goTo(location);
    }

    this.logSomething = function () {
        this.log.error("I'm something");
    }

    this.logSomethingElse = function () {
        this.log.warn("I'm warning something else");
        this.log.info("One last note")
    }
}

new OpenSubAppAction();
