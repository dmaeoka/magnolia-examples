var RedirectModel = function () {
    const NodeUtil = Java.type("info.magnolia.jcr.util.NodeUtil")
    const NodeTypes = Java.type("info.magnolia.jcr.util.NodeTypes")
    const StringUtils = Java.type("org.apache.commons.lang3.StringUtils")
    const PropertyUtil = Java.type("info.magnolia.jcr.util.PropertyUtil")
    const RepositoryConstants = Java.type("info.magnolia.repository.RepositoryConstants")
    const HttpServletResponse = Java.type("javax.servlet.http.HttpServletResponse")
    const RenderingModel = Java.type("info.magnolia.rendering.model.RenderingModel")

    const TARGET_LINK_PROPERTY_NAME = "targetPageLink";
    this.execute = function () {
        if (!cmsfn.isEditMode()) {
            let redirectToPage = this.getRedirectLinkManuallyDefined()
            if (StringUtils.isBlank(redirectToPage)) {
                redirectToPage = this.getRedirectLinkToFirstChild();
            }

            if (!StringUtils.isEmpty(redirectToPage)) {
                ctx.getResponse().sendRedirect(redirectToPage);

            } else {
                ctx.getResponse().sendError(HttpServletResponse.SC_NOT_FOUND);
            }

            if (cmsfn.isPublicInstance() || !StringUtils.isEmpty(redirectToPage)) {
                return RenderingModel.SKIP_RENDERING;
            }
        }
        // const abc = this.redirectLinkPathToFirstChild()
        // console.log(`abc: ${abc}`)
        // const def = this.redirectLinkPathManuallyDefined()
        // console.log(`def: ${def}`)
        return "";
    }

    this.getRedirectLinkToFirstChild = function () {
        this.log.info("redirectLinkPathToFirstChild")
        const allChildren = NodeUtil.getNodes(content.getJCRNode(), NodeTypes.Page.NAME);
        const iterator = allChildren.iterator();
        if (iterator.hasNext()) {
            return cmsfn.link(iterator.next());
        }
        return null;
    }

    this.getRedirectLinkManuallyDefined = function () {
        this.log.info("redirectLinkPathManuallyDefined")
        const contentNode = content.getJCRNode()
        if (contentNode.hasProperty(TARGET_LINK_PROPERTY_NAME) && StringUtils.isNoneBlank(PropertyUtil.getString(contentNode, TARGET_LINK_PROPERTY_NAME))) {
            const pageId = contentNode.getProperty(TARGET_LINK_PROPERTY_NAME).getString();
            return cmsfn.link(RepositoryConstants.WEBSITE, pageId);
        }
        return null;
    }

    this.test = function () {
        this.log.info("Called Test");
        return "this is a test"
    }
}

new RedirectModel()