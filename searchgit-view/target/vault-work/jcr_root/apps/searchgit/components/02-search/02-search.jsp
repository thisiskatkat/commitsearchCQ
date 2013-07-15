<%@ include file="/apps/searchgit/components/global.jspx" %>

<%@ taglib prefix="cqbp-searchgit" uri="http://searchgit.com/taglibs/searchgit-taglib" %>


<form id="search">

	<fieldset name="basic-fields">
		<label for="repository">Repository you'd like to look into</label>
		<input type="text" id="owner" placeholder="Repository owner, eg. twitter">
		<input type="text" id="repo" placeholder="Repository name, eg. bootstrap"> 

		<label for="repository">Words in commit message you are looking for</label>
		<input type="text" id="query" placeholder="eg. octocat fix">
	</fieldset>

	<button type="submit" class="submit-search">Search</button>

</form>


<!-- for translations:
in head:
<cq:setContentBundle />

to place the translation:
<fmt:message	key="SSS" />
 -->


