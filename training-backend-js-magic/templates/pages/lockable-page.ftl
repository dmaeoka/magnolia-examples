[#assign isLocked = content.locked!false]
[#assign lockString = "not locked"]
[#if isLocked]
[#assign lockString = "locked"]
[/#if]

<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">

    <head>
      [@cms.page /]
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            
            <div class="default-text-image">
		        <h4 class="chapter-head">This is a ${lockString} page.</h4>
				<p>
				    This is a 
					<strong>
						${lockString}
					</strong>
					page because the page contains a <strong>boolean property 'locked'</strong> which has in this case the value: 
					<strong>
						${isLocked?string}
					</strong>
			    </p>
			</div>
        </div>
    </body>

</html>