<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>New License</h1>
<form:form action="/licenses" method="post" modelAttribute="licenseObj">
    <p>
    	<form:label path="person.id">Person</form:label>
    	<form:errors path = "person.id"/>
		<form:select path="person.id"><!-- regular inputs require a name value, but form form needs a path -->
    		<c:forEach items="${persons}" var="p">
        		<form:option value="${p.id}"><c:out value="${p.firstName} ${p.lastName}"/></form:option><!-- must use id to save the relationship -->
    		</c:forEach><!-- whatever is in the form form that has value passing to the object has to be a form form object -->
		</form:select>
    </p>
    <p>
        <form:label path="state">State</form:label>
        <form:errors path="state"/>
        <form:input path="state"/>
    </p>
    <p>
        <form:label path="expirationDate">Expiration Date</form:label>
        <form:errors path="expirationDate"/>
        <form:input type="date" path="expirationDate"/>
    </p>    
    <input type="submit" value="Submit"/>
</form:form>    
</body>
</html>