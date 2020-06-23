<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Task</title>
</head>
<body>
<h1>Edit <c:out value="${task.task}"/></h1>
<form:form action="/tasks/${task.id}/edit" method="post" modelAttribute="task">
    <input type="hidden" name="_method" value="put">
    <form:label path="task">Task</form:label>
		<p style="color:red"><c:out value="${nameError}"/></p>
		<form:input path="task"/><br>
		
		<form:label path="assignee">Assignee</form:label>
		<p style="color:red"><form:errors path="assignee"/></p>
		<form:select path="assignee.id"><!-- allows me to use the assignee from model -->
	   		<c:forEach items="${users}" var="u"><!-- {users} based on the model.attribute "users" -->
	       		<form:option value="${u.id}"><c:out value="${u.name}"/></form:option>
	   		</c:forEach>
		</form:select><br><br>
		
		<form:label path="priority">Priority</form:label>
		<p style="color:red"><form:errors path="priority"/></p>
		<select name="priority">
	       	<option value="low">Low</option>
	       	<option value="medium">Medium</option>
	       	<option value="high">High</option>
		</select><br>
    <input type="submit" value="Submit"/>
</form:form>
</body>
</html>