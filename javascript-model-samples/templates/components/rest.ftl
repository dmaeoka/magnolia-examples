[#-------------- ASSIGNMENTS --------------]
[#assign posts = model.getPosts()!]
[#assign data = {"title": "foo", "body": "bar", "userId": 1}]
[#--assign newPost = model.createPost(data)!--]

[#-------------- RENDERING --------------]
<div class="row">
	<div class="col-md-12">
		<h2>All posts:</h2>
		[#list posts as post]
			<h3>${post.title!}</h3>
			<p>${post.body!}</p>
			<hr/>
		[/#list]
		<h2>New post created:</h2>
		<h3>${newPost.title!}</h3>
		<p>${newPost.body!}</p>
	</div>
</div>
