<%@ include file="/apps/searchgit/components/global.jspx" %>

<%@ taglib prefix="cqbp-searchgit" uri="http://searchgit.com/taglibs/searchgit-taglib" %>


<form id="search">

	<fieldset name="basic-fields">
		<label for="repository">Repository you'd like to look into</label>
		<input type="text" id="owner" placeholder="Repository owner, eg. twitter" value="btdevil">
		<input type="text" id="repo" placeholder="Repository name, eg. bootstrap" value="nearly"> 

		<label for="repository">Words in commit message you are looking for</label>
		<input type="text" id="query" placeholder="eg. octocat fix" value="work">
	</fieldset>

	<button type="submit" class="submit-search">Search</button>

</form>




