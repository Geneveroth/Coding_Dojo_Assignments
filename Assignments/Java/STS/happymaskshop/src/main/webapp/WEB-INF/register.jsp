<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="css/register.css">
<title>Registration</title>
</head>
<body>
<h1><img class="logo" src="https://live.staticflickr.com/65535/50048285667_6237f87c8c_z.jpg"></h1>
    <p style="color:red"><form:errors path="user.*"/></p>
    <div class="container">
<h1>Register!</h1>
    <form:form method="POST" action="/register" modelAttribute="user">
        <p>
            <form:label path="name">Name:</form:label><br>
            <form:input type="name" path="name"/>
        </p>
        <p>
            <form:label path="email">Email:</form:label><br>
            <form:input type="email" path="email"/>
        </p>
        <p>
            <form:label path="password">Password:</form:label><br>
            <form:password path="password"/>
        </p>
        <p>
            <form:label path="passwordConfirmation">Password Confirmation:</form:label><br>
            <form:password path="passwordConfirmation"/>
        </p>
        <input type="submit" value="Register!"/>
    </form:form>
    </div>
</body>
</html>