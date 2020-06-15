<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2><c:out value="${error}"/></h2>
	<form method="POST" action="/">
		<label>Your Name:</label>
			<input type="text" name="name"/><br>
		<label>Dojo Location:</label>
			<select name="location">
				<option value=""></option>/
				<option value="San Jose">San Jose</option>
				<option value="Oakland">Oakland</option>
				<option value="Burbank">Burbank</option>
				<option value="Seattle">Seattle</option>
			</select><br>
		<label>Favorite Language:</label>
			<select name="language">
				<option value=""></option>/
				<option value="Python">Python</option>
				<option value="Java">Java</option>
				<option value="Javascript">Javascript</option>
				<option value="C#">C#</option>
			</select><br>
		<label>Comment (optional):</label><br>
			<textarea name="comment"></textarea><br>
			<input type="submit">
	</form>
</body>
</html>