[#macro pagination paginator]
	[#if paginator.getPageCount()?has_content && paginator.getPageCount() > 1]
	<ul class="pager">
		[#if paginator.isFirst()]
			<li class="previous disabled"><a>« Previous</a></li>
		[#else]
			<li class="previous"><a href="${model.link(content, {"page": (paginator.getPage() - 1)?string.number})}">« Previous</a></li>
		[/#if]

		[#if paginator.isLast()]
			<li class="next disabled"><a>Next »</a></li>
		[#else]
			<li class="next"><a href="${model.link(content, {"page": (paginator.getPage() + 1)?string.number})}">Next »</a></li>
		[/#if]
	</ul>
	[/#if]
[/#macro]
