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
		<title>Welcome!</title>
	</head>
	<body>
		<div class="container">
		<div class="header">
		<c:if test="${empty user}">
			<a href="/register"><button>Register</button></a>
    		<a href="/login"><button>Login</button></a>
		</c:if>
		<c:if test="${not empty user}">
    		<a href="/order"><button class="create">Create Your Mask</button></a>
    		<a href="/cart"><button>Cart</button></a>
    		<a href="logout">Logout</a>
		</c:if>
		</div>
			
		<h1><img class="logo" src="https://live.staticflickr.com/65535/50048285667_6237f87c8c_z.jpg"></h1>
			<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
		  <ol class="carousel-indicators">
		    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
		    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
		    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
		  </ol>
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img class=carouselImg src="https://i.etsystatic.com/22757506/r/il/1ddb65/2295073727/il_794xN.2295073727_e82j.jpg" class="d-block w-100" alt="...">
		      <div class="carousel-caption d-none d-md-block">
		        <h5 class=title>Masks</h5>
		        <p class=desc>All colors and patterns-one size fits all.</p>
		      </div>
		    </div>
		    <div class="carousel-item">
		      <img class=carouselImg width="200" height="400" src="https://cdn.shopify.com/s/files/1/0403/2705/3475/products/custom_face_masks_bulk_300x300.jpg?v=1591396694" class="d-block w-100" alt="...">
		      <div class="carousel-caption d-none d-md-block">
		        <h5 class=title>Custom Orders</h5>
		        <p class=desc>Create a custom order for you perfect mask.</p>
		      </div>
		    </div>
		    <div class="carousel-item">
		      <img class="carouselImg" src="https://www.intelligenttransport.com/wp-content/uploads/coronavirus-vector.jpg" class="d-block w-100" alt="...">
		      <div class="carousel-caption d-none d-md-block">
		        <h5 class=title>Compliance</h5>
		        <p class=desc>Fully compliant with COVID-19 regulations.</p>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
	</body>
</html>