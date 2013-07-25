<%@ include file="/apps/searchgit/components/global.jspx" %>

<%@ taglib prefix="cqbp-searchgit" uri="http://searchgit.com/taglibs/searchgit-taglib" %>
<cq:setContentBundle />

<form id="search">
	<fieldset name="basic-fields">
		<label for="repository"><fmt:message key="repo-title" /></label>
		<input type="text" id="owner" placeholder="<fmt:message key="owner-plchldr"/>">
		<input type="text" id="repo" placeholder="<fmt:message key="repo-plchldr"/>"> 

		<label for="repository"><fmt:message key="query-title"/></label>
		<input type="text" id="query" placeholder="<fmt:message key="query-placeholder"/>">
	</fieldset>
	<button type="submit" class="submit-search"><fmt:message key="search-button"/></button> <div id="loader"><img src="/etc/designs/searchgit/img/loader.gif" alt="Loading animation"></div>
</form>





