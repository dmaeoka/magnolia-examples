<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
<head>
[@cms.page /]
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}"/>
    <meta name="keywords" content="${content.keywords!""}"/>

    <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css" rel="stylesheet" integrity="sha384-HzUaiJdCTIY/RL2vDPRGdEQHHahjzwoJJzGUkYjHVzTwXFQ2QN/nVgX7tzoMW3Ov" crossorigin="anonymous">
    ${resfn.css("/javascript-model-samples.*css")}

</head>
<body class="js-model-sample ${cmsfn.language()}">

<div class="container ">
    <div class="row">
        <div class="col-md-12">
            <h1>${content.title!}</h1>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-12">
        [@cms.area name="navigation"/]
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
        <div class="breadcrumbs">
        ${model.renderBreadcrumbs(content)}
        </div>
        </div>
    </div>

</div>

<div class="container">
[@cms.area name="main"/]
</div>

<footer class="footer">
    <div class="container">
        <p class="text-muted">
            ${model.getHappinessLevel()} -
            ${model.getPageInfo(content)}
        </p>
    </div>
</footer>

<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</body>
</html>
