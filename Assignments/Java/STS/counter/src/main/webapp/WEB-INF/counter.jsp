<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Current Visit Counter</title>
</head>
<body>

<p> You have visited <a>http://localhost8080</a> <c:out value="${count}"/> times.</p>
<p><a href="/">Test Another Visit?</a> 
<p><a href="/counter2">Add 2 to the count</a>
</body>
</html>