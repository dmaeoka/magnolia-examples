[#assign names = model.getNames()]

<ul>
[#list names as name]
	<li>${name.firstName} ${name.lastName}</li>
[/#list]
</ul>