<!DOCTYPE html>
<html xml:lang="en" lang="en" class="no-js">
 
    <head>
        [@cms.page /]
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        [#-- Access from the page's content: The page's 'title' OR if non-existing, the page's node name. --]
        <title>${content.title!content.@name}</title>
 
        [#-- A manual defined link to a resource:
        <link rel="stylesheet" href="${ctx.contextPath}/.resources/training-templating-freemarker/webresources/bootstrap.css" media="screen">
        --]
        [#-- Using the 'resfn' for a more dynamic approach. --]
        ${resfn.css("/training-templating-freemarker/webresources/css/.*css")}
    </head>
     
    <body>
 
        [#if cmsfn.editMode]
        <div class="container">
            <div class="panel panel-info">
                 
            [#assign targetPageLink = model.getRedirectLinkManuallyDefined()!]
            [#if targetPageLink?has_content]
                <div class="panel-heading">
                    <h1 class="panel-title">Success: Redirect to manually defined page.</h1>
                </div>
                <div class="panel-body">
                    <p>This page will redirect to the manually defined target page in the page's dialog.</p>
                    <p><a href="${targetPageLink}">${targetPageLink}</a></p>
                </div>
             
            [#else]
                [#assign childPageLink = model.getRedirectLinkToFirstChild()!]
                [#if childPageLink?has_content]
                    <div class="panel-heading">
                        <h1 class="panel-title">Success: Redirect to first child page.</h1>
                    </div>
                    <div class="panel-body">
                        <p>This page will automatically redirect to the first child page found, because the 'targetPageLink' value in the Page's dialog is not defined.</p>
                        <p><a href="${childPageLink}">${childPageLink}</a></p>
                    </div>
                     
                 [#else]
                    <div class="panel-heading">
                        <h1 class="panel-title">Attention error 404 on Public!</h1>
                    </div>
                    <div class="panel-body">
                        <p>This page will render a 404 error on public instance! Cause of this 404 error on public is:</p>
                        <p>No manually defined target page and no child page found for a redirection!</p>
                    </div>
                [/#if]
            [/#if]
            </div>
        </div>
        [/#if]
    </body>
     
</html>