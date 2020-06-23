<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Ideas</title>
</head>
<body>
	<a href="/logout">Logout</a>
	<h1>Welcome, <c:out value="${user.name}" /></h1>
	<table>
	    <thead>
	        <tr>
	            <th>Idea</th>
	            <th>Created By</th>
	        </tr>
	    </thead>
	    <tbody>
		    <c:forEach items="${ideas}" var="idea">
		    	<tr>
		            <td><a href="/ideas/${idea.id}"><c:out value="${idea.idea}"/></a></td>
		            <td><c:out value="${idea.creator.name}"/></td>
		      	</tr>
		    </c:forEach>
	    </tbody>
	</table><br><br>
	<p>
		<a href="/ideas/new"><button>Create an Idea</button></a>
	</p>
</body>
</html>