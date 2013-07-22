<%@ include file="/apps/searchgit/components/global.jspx" %>

<%@ taglib prefix="cqbp-searchgit" uri="http://searchgit.com/taglibs/searchgit-taglib" %>
<cq:setContentBundle />

<form id="search">
	<fieldset name="basic-fields">
		<label for="repository"><fmt:message key="repo-title" /><!-- Repository you'd like to look into --></label>
		<input type="text" id="owner" placeholder="<fmt:message key="owner-plchldr"/>"><!-- Repository owner, eg. twitter -->
		<input type="text" id="repo" placeholder="<fmt:message key="repo-plchldr"/>"> <!-- Repository name, eg. bootstrap -->

		<label for="repository"><fmt:message key="query-title"/><!-- Words in commit message you are looking for --></label>
		<input type="text" id="query" placeholder="<fmt:message key="query-placeholder"/>"><!-- eg. octocat fix -->
	</fieldset>
	<button type="submit" class="submit-search"><fmt:message key="search-button"/><!-- Search --></button>
</form>





