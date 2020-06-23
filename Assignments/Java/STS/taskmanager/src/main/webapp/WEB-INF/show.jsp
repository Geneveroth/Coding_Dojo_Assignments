<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Questions Profile</title>
</head>
<body>
	<h1>Task:<c:out value="${task.task}"/></h1>
	<p>
		Creator:<c:out value="${task.creator.name}"/>
	</p>
	<p>
		Assignee:<c:out value="${task.assignee.name}"/>
	</p>
	<p>
		Priority:<c:out value="${task.priority}"/>
	</p>
	<a href="/tasks/${task.id}/edit"><button>Edit</button></a>
	<form action="/tasks/${task.id}" method="post">
	    <input type="hidden" name="_method" value="delete">
	    <input type="submit" value="Delete">
	</form>
</body>
</html>