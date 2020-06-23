<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Questions Profile</title>
</head>
<body>
	<h1><c:out value="${question.question}"/>
	<h2>Tags:
		<c:forEach items="${tags}" var="tag">
			<c:out value="${tag.subject}"/>
		</c:forEach>
	</h2>
	<p>
	<h3>Answers:</h3>
	<c:forEach items="${answers}" var="a">
		<c:out value="${a.answer}"/>
	</c:forEach>
	<h1>Add your answer:</h1>
		<form:form action="/questions/${question.id}" method="post" modelAttribute="answer">
			<form:label path="answer">Answer:</form:label>
			<p style="color:red"><form:errors path="answer"/></p>
			<form:textarea path="answer"/><br>
			<input type="submit" value="Answer it!"/>
		</form:form>
<%-- 	<form action="/questions/${question.id}" method="post"> --%>
<!-- 		<p> -->
<!-- 			<span style="display:block;">Answer:</span> -->
<!-- 			<textarea name="answer" rows=6 cols=60></textarea> -->
<!-- 		</p> -->
<%-- 		<p>${error}</p> --%>
<!-- 		<button type="submit">Submit Answer</button> -->
<%-- 	</form> --%>
	<a href="/questions/"><button>Back to Dashboard</button></a>
</body>
</html>