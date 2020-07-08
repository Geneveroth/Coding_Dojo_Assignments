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
<title>Cart</title>
</head>
<body>
<h1><img class="logoOrder" src="https://live.staticflickr.com/65535/50048285667_6237f87c8c_z.jpg"></h1>
<a href="/"><button>Return Home</button></a>
	<div class="container">
		<h1>Welcome <c:out value="${user.name}"/></h1>
		<h2></h2>
		<div id="cart" class="row">
			<div class="col-4">
				<div class="list-group" id="list-tab" role="tablist">
				Your Masks:
						<a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">...</a>
					<%-- <c:forEach items="${user.masks}" var="order"> --%>
						<a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"><%-- <c:out value="${order.design}"/> --%>
						Black</a>
						<a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Polkadot</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Orange</a>
			<%-- 		</c:forEach> --%>
    			</div>
				</div>
			</div>
			<div class="col-8">
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"></div>
					<%-- <c:forEach items="${user.masks}" var="mask"> --%>
					<div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Style: A solid black face mask-$10 <%-- <c:out value="${mask.design}"/> --%></div>
					<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Style: A polkadot face mask-$12</div>
      				<div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Style: An orange face mask-$10</div>
    				</div>
					
					<%-- </c:forEach> --%>
				</div>
			</div>
		</div>
		<p>Total Price: $32</p>
	</div>
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>