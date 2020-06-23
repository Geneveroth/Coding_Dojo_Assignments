<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Questions Dashboard</title>
</head>
<body>
	<a href="/logout">Logout</a>
	<h1>Welcome, <c:out value="${user.email}" /></h1>
	<table>
	    <thead>
	        <tr>
	            <th>Question</th>
	            <th>Tags</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${questions}" var="question"> 
		    	<tr>
		            <td><a href="/questions/${question.id}"><c:out value="${question.question}"/></a></td>
		            <c:forEach items="${question.tags}" var = "tags">
		            	<td><c:out value="${tags.subject}"/></td>
		            </c:forEach>
		    	</tr>
	        </c:forEach>
	    </tbody>
	</table><br><br>
	<p>
		<a href="/questions/new"><button>New Question</button></a>
	</p>
</body>
</html>