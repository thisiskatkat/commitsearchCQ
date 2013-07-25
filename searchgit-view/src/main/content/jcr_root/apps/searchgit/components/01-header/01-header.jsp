<%@ include file="/apps/searchgit/components/global.jspx" %>
<%@ taglib prefix="cqbp-searchgit" uri="http://searchgit.com/taglibs/searchgit-taglib" %>
<ha:initBean beanType="com.searchgit.global.headerBean" var="headerBean"/> <!-- ?not sure about "com.searchgit.global" -->
<cq:setContentBundle />

<header>
	<h1><fmt:message key="main-title" />

${headerBean.titleText}

	</h1>
</header>

