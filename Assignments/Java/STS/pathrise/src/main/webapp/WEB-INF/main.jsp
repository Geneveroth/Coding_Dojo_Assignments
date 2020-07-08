<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<%@ taglib prefix = "sql" uri="http://java.sun.com/jsp/jstl/sql" %>   
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<title>Job Wishlist</title>
</head>
<body style="background:#F7F6FA">
<!-- <script>function color(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    	return randomColor;
	}
</script>	 -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content" style="width:230px">
	      <div style="background:#8B008B" class="modal-header">
	        <h5 style="color:white" class="modal-title" id="exampleModalLabel">Add a Job</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	      	<%-- <% int counter = 0;%>      --%> 
	      	<form method="post" action="/create">
		  		<input type="text" name="companyName" placeholder="Company Name"/><br>
		  		<input type="text" name="jobTitle" placeholder="Job Title"/><br>
 <%-- 			 <%=++counter %> --%>
	        <button style=" background:#9932CC; color:white; border-radius:3px" type="submit" class="btn btn-primary">Continue</button>
	      </form>
	      </div>
	    </div>
	  </div>
	</div>
   	<c:forEach items="${jobs}" var="job">
	<div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="deleteLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div style="background:#8B008B" class="modal-header">
	        <h5 style="color:white" class="modal-title" id="deleteLabel">Delete Job</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	      	<h6>Are you sure you want to delete this job?</h6>
	      	<form action="/${job.id}" method="post">
	    			<input type="hidden" name="_method" value="delete">
	   				<input style=" background:#9932CC; color:white; border-radius:3px" type="submit" value="Delete">
			</form>
			</div>
			</div>
			</div>
			</div>
			</c:forEach> 
	<h3>Wishlist</h3>
	
	<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" style="
	margin-left: 1px;
    padding-left: 150px;
    padding-right: 118px;
    background: white;
    font-size:x-large;
    color:grey">
 		 +
	</button><br><br>
<%-- <p><%= counter%></p> --%>
	<c:forEach items="${jobs}" var="job">
		<div class="card" style="width: 18rem;">
		  <div class="card-body"style="background:#8B008B; border-radius:5px">
		  <button style="float:right; background:#9932CC" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#delete">Delete</button>
		    <h5 style="color:white" class="card-title"><c:out value="${job.companyName}"/></h5>
		    <h6 class="card-subtitle mb-2 text-white"><c:out value="${job.jobTitle}"/></h6>
		    <%-- <h7> class="card-subtitle mb-2 text-muted">added <c:out --%>
		  </div>
		</div>
	</c:forEach>
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>