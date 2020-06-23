<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create Task</title>
</head>
<body>
	<h1>Create a New Task</h1>
	<form:form action="/tasks/newtask" method="post" modelAttribute="task">
		<form:label path="task">Task</form:label>
		<p style="color:red"><form:errors path="task"/></p>
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
		<form:select path="priority">
	       	<form:option value="low">Low</form:option>
	       	<form:option value="medium">Medium</form:option>
	       	<form:option value="high">High</form:option>
		</form:select><br>
		<input type="submit" value="Create"/>
	</form:form>
</body>
</html>