[#-------------- INCLUDES --------------]
[#include "/javascript-model-samples/templates/macros/listErrors.ftl"]

[#-------------- ASSIGNMENTS --------------]
[#assign result = model.parse(actionResult)!]

[#-------------- RENDERING --------------]
<div class="row">
	<div class="col-md-12">
	[#if result.success??]
		[#if result.success == 1]
			<div class="alert alert-success" role="alert"><strong>Well done!</strong>
				New entry has been successfully added to the Contacts app!
			</div>
		[#elseif result.success == 0]
			<div class="alert alert-danger" role="alert"><strong>Error!</strong>
				Contact could not be added to the Contacts app!
			</div>
		[/#if]
	[#else]
		<form action="${cmsfn.link(cmsfn.page(content))}" method="post" enctype="multipart/form-data">
			<div class="form-group[#if (result.firstName)??] has-error[/#if]">
				<label for="firstName">First Name</label>
				<input type="text" class="form-control" id="firstName" name="firstName" value="${ctx.parameters.firstName!?html}" placeholder="First Name">
				[#if (result.firstName)??]
					[@listErrors result.firstName/]
				[/#if]
			</div>
			<div class="form-group[#if (result.lastName)??] has-error[/#if]">
				<label for="lastName">Last Name</label>
				<input type="text" class="form-control" id="lastName" name="lastName" value="${ctx.parameters.lastName!?html}" placeholder="Last Name">
				[#if (result.lastName)??]
					[@listErrors result.lastName/]
				[/#if]
			</div>
			<div class="form-group[#if (result.organization)??] has-error[/#if]">
				<label for="organization">Organization</label>
				<input type="text" class="form-control" id="organization" name="organization" value="${ctx.parameters.organization!?html}" placeholder="Organization">
				[#if (result.organization)??]
					[@listErrors result.organization/]
				[/#if]
			</div>
			<div class="form-group[#if (result.email)??] has-error[/#if]">
				<label for="email">Email</label>
				<input type="email" class="form-control" id="email" name="email" value="${ctx.parameters.email!?html}" placeholder="Email">
				[#if (result.email)??]
					[@listErrors result.email/]
				[/#if]
			</div>
			<div class="form-group[#if (result.photo)??] has-error[/#if]">
				<label for="photo">Photo</label>
				<input type="file" id="photo" name="photo">
				[#if (result.photo)??]
					[@listErrors result.photo/]
				[#else]
					<p class="help-block">Upload photo.</p>
				[/#if]
			</div>
			<input type="hidden" name="mgnlModelExecutionUUID" value="${content.@uuid}"/>
			<input type="submit" class="btn btn-default" name="submit" value="Save contact"/>
		</form>
	[/#if]
	</div>
</div>
