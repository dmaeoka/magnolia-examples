<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
  
  <head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>${content.title!content.@name}</title>
    ${resfn.css("/training-backend-js-magic/webresources/css/.*css")}
  </head>

  <body>
    <div class="container">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h1 class="panel-title">${content.title!content.@name}</h1>
            </div>
            
            [#if content.abstract?has_content]
            <div class="panel-body">
                <p>${content.abstract}</p>
            </div>
            [/#if]
        </div>
        
        [#assign colorField = content.colorField!]
        <b>colorField:</b> <span style="color:${colorField}">${colorField}</span><br />
        <b>textField:</b> ${content.textField!}<br />
        <b>emailField:</b> ${content.emailField!}<br />
        <b>conditionalField1:</b> ${content.conditionalField1!}<br />
        <b>conditionalField2:</b> ${content.conditionalField2!}<br />
    </div>
  
  </body>

</html>
