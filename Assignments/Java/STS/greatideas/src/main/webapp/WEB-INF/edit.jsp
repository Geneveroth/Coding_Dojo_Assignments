<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Idea</title>
</head>
<body>
	<a href="/ideas"><button>Back to Ideas</button></a>
	<h1>Edit <c:out value="${idea.idea}"/></h1>
	<form:form action="/ideas/${idea.id}/edit" method="post" modelAttribute="idea">
	    <input type="hidden" name="_method" value="put">
	    <form:label path="idea">Idea</form:label>
			<p style="color:red"><c:out value="${nameError}"/></p>
			<form:input path="idea"/><br>
	   <input type="submit" value="Submit"/>
	</form:form>
	   <form action="/ideas/${idea.id}" method="post">
		    <input type="hidden" name="_method" value="delete">
		    <input type="submit" value="Delete">
		</form>
</body>
</html>