<%@page session="false" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %>
<cq:setContentBundle />

<cq:include path="search" resourceType="searchgit/components/02-search"/>
<cq:include path="results" resourceType="searchgit/components/03-results"/>
<cq:include path="parBaseMain" resourceType="foundation/components/parsys"/>