<%@page session="false" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %>
<cq:setContentBundle />

<body>
	<cq:include script="header.jsp" />
	<cq:include script="center.jsp" />
	<cq:include script="footer.jsp" />
	<cq:include script="scripts_bottom.jsp"/>
</body>
