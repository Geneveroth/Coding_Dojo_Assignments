<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Task Manager</title>
</head>
<body>
	<%-- <h1>Welcome, <c:out value="${user.name}" /></h1> --%>
	<a href="/logout">Logout</a>
	<table>
	    <thead>
	        <tr>
	            <th>Task</th>
	            <th>Creator</th>
	            <th>Assignee</th>
	            <th>Priority</th>
	        </tr>
	    </thead>
	    <tbody>
		    		<c:forEach items="${tasks}" var="task">
		    	<tr>
		            	<td><a href="/tasks/${task.id}"><c:out value="${task.task}"/></a></td>
		            	<td><c:out value="${task.creator.name}"/></td>
		            	<td><c:out value="${task.assignee.name}"/></td>
		            	<td><c:out value="${task.priority}"/></td>
		    	</tr>
		            </c:forEach>
	    </tbody>
	</table><br><br>
	<p>
		<a href="/tasks/new"><button>Create Task</button></a>
	</p>
</body>
</html>