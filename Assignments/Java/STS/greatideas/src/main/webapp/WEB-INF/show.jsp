<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Idea</title>
</head>
<body>
	<a href="/ideas"><button>Back to Ideas</button></a>
	<h1><c:out value="${idea.idea}"/></h1>
	<p>
		Created By:<c:out value="${idea.creator.name}"/>
	</p>
	<a href="/ideas/${idea.id}/edit"><button>Edit</button></a>
</body>
</html>