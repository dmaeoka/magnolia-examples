[#macro listErrors errors]
<ul class="help-block">
	[#list errors as error]
		<li>${error}</li>
	[/#list]
</ul>
[/#macro]
