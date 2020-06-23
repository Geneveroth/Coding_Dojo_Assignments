<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create Idea</title>
</head>
<body>
	<h1>Create a New Idea</h1>
	<form:form action="/ideas/newidea" method="post" modelAttribute="idea">
		<form:label path="idea">Content:</form:label>
		<p style="color:red"><form:errors path="idea"/></p>
		<form:input path="idea"/><br>
		<input type="submit" value="Create"/>
	</form:form>
	<a href="/ideas"><button>Cancel</button></a>
</body>
</html>