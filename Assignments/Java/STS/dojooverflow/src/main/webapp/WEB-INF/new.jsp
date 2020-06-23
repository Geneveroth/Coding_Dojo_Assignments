<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Question</title>
</head>
<body>
	<h1>What is your question?</h1>
	<form:form action="/questions/newquestion" method="post" modelAttribute="question">
		<form:label path="question">Question:</form:label>
		<p style="color:red"><form:errors path="question"/></p>
		<form:textarea path="question"/><br>
		
		<form:label path="tags">Tags:</form:label>
		<form:errors path="tags"/>
		<form:input path="tags"/>
		<input type="submit" value="Submit"/>
	</form:form>
	<a href="/questions/"><button>Back to Dashboard</button></a>
	<%-- <form action="/questions/newquestion" method="post" modelAttribute="question">
		<p>
	        <span style="display:block;">Question:</span>
	    	<textarea name="question" rows=6 cols=60></textarea>
    	</p>
    		<span style="display:block;">Tags:</span>
	    	<input name="tags"></input>
		<p>
		<p>${error}</p>
		<button type="submit">Submit Answer</button>
	</form> --%>
</body>
</html>