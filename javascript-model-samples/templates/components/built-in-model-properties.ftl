<div class="row">
    <div class="col-md-12">
        <h4>${model.parent.content.title!"Built-in model properties"}</h4>
        This component demonstrates usage of the built-in properties of the <code>model</code>, such as
        <code>model.parent</code>, <code>model.content</code>, <code>model.definition</code>, etc. and combinations.
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <h4>Accessing a property of the parent template definition</h4>
        <code>model.parent.definition.title</code> => ${model.parent.definition.title}
        </p>
    </div>
</div>


<div class="row">
    <div class="col-md-12">
        <h4>Calling a method defined in the parent model</h4>
         <code>model.parent.getHappinessLevel()</code> => ${model.parent.getHappinessLevel()}
        </p>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <h4>Combining model properties and a method of the parent model</h4>
         <code>model.parent.getPageInfo(model.parent.content)</code> => ${model.parent.getPageInfo(model.parent.content)}
        </p>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <h4>Calling a function of the current model which is using built-in model properties within the model class</h4>
        <p>The output is not really fancy. Rather <a href="https://git.magnolia-cms.com/projects/LIGHT-MODULES/repos/javascript-model-samples/browse/templates/components/built-in-model-properties.js" target="_some_code">check the code</a> of the JS model to understand how to use built-in model properties within a JavaScript Model.<br/>
        In the JS model file use <code>this</code> instead of <code>model</code>!
        </p>


        <p>
        ${model.demonstrateBuiltInProperties()}<br/>
        </p>

    </div>
</div>
