[#include "/javascript-model-samples/templates/macros/pagination.ftl"]

[#assign contacts = model.getContacts()]
[#assign paginator = model.getPaginator()]
[#if ctx.getParameter("order")?has_content]
	[#assign order = (ctx.getParameter("order") == "asc")?then("desc", "asc")]
[#else]
	[#assign order = "desc"]
[/#if]

<table class="table table-striped">
	<thead>
		<tr>
			<th><a href="${model.link(content, {"orderBy": "firstName", "order": order})}">First Name</a></th>
			<th><a href="${model.link(content, {"orderBy": "lastName", "order": order})}">Last Name</a></th>
			<th><a href="${model.link(content, {"orderBy": "email", "order": order})}">E-mail</a></th>
			<th><a href="${model.link(content, {"orderBy": "organizationName", "order": order})}">Organization</a></th>
		</tr>
	</thead>
	<tbody>
		[#list contacts as c]
			[#assign contact = cmsfn.asContentMap(c)]
			<tr>
				<td>${contact.firstName!}</td>
				<td>${contact.lastName!}</td>
				<td>${contact.email!}</td>
				<td>${contact.organizationName!}</td>
			</tr>
		[/#list]
	</tbody>
</table>

[@pagination paginator/]