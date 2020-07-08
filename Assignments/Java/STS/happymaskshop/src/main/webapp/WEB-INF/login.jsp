<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>
    
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="css/login.css">
    <title>Login</title>
</head>
<body>
<h1><img class="logo" src="https://live.staticflickr.com/65535/50048285667_6237f87c8c_z.jpg"></h1>
    <p style="color:red"><c:out value="${error}"/></p>
    <div class="container">
    <h1>Login</h1>
    <form method="post" action="/login">
        <p>
            <label for="email">Email</label><br>
            <input type="text" id="email" name="email"/>
        </p>
        <p>
            <label for="password">Password</label><br>
            <input type="password" id="password" name="password"/>
        </p>
        <input type="submit" value="Login!"/><br>
    </form>
    </div>    
</body>
</html>