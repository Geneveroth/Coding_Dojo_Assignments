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
		<link rel="stylesheet" type="text/css" href="css/home.css">
<title>Create Your Mask</title>
</head>
<body>
<h1><img class="logoOrder" src="https://live.staticflickr.com/65535/50048285667_6237f87c8c_z.jpg"></h1>
<a href="/"><button>Return Home</button></a>
	<form:form action="/order/create" method="post" modelAttribute="mask">
		<div id="order" class="container">
  			<div class="form-group">
    			<label for="exampleFormControlSelect1">Choose your Mask</label>
    			<%-- 	<c:forEach items="${mask.id}" var="mask"/> --%>
   					<form:select path="design" class="form-control" id="exampleFormControlSelect1">
      					<optgroup label="Solid Colors-$10/ea"><%-- <c:out value="${mask.design}"/></option> --%>
	      					<option>Red</option>
	      					<option>Orange</option>
	      					<option>Yellow</option>
	      					<option>Green</option>
	      					<option>Blue</option>
	      					<option>Purple</option>
	      					<option>Black</option>
	      				</optgroup>
	      				<optgroup label="Patterns-$12/ea">
	      					<option>Polkadot</option>
	      					<option>Stripes</option>
	      					<option>Character Print</option>
	      					<option>Animal Print</option>
	      					<option>Stars</option>
	      					<option>Plaid</option>
	      				</optgroup>
	      				<optgroup label="Custom-$15/ea">
	      					<option>Describe your Custom Mask</option>
	      				</optgroup>
				    </form:select>
 			 </div>
			<input type="submit" value="Create"/>
		</div>
	</form:form>  
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>  
</body>
</html>