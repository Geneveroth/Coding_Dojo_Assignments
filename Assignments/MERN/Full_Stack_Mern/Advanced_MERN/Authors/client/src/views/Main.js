import React, { useState, useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default () => {
	const [allAuthors, setAllAuthors] = useState(null);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:8000/api/author')
		  .then(response => setAllAuthors(response.data))
		  .catch(() => setHasError(true));
		 }, [allAuthors]);

	function handleDelete(id) {
		axios.delete('http://localhost:8000/api/author/' + id)
			.then(() => setAllAuthors(allAuthors.filter(author => author._id !== id)))
		}
	if(hasError) return 'Something went wrong!';

	if(allAuthors=== null) return 'Loading...';
	return( 
		<div>
		<Link to={'/author/new'}>Add an Author</Link>
		<h1>Favorite Authors</h1>
		<h2>We have quotes by...</h2>
			<table>
				<thead>
					<tr>
						<th>Author</th>
						<th>Actions Available</th>
					</tr>
				</thead>
				<tbody>
					{allAuthors.map(author=>(
					<tr key={author._id}>
						<td>{author.name}</td>
						<td><button onClick={() => handleDelete(author._id)}>Delete</button>
                		<button onClick={() => navigate('/author/edit/' + author._id)}>Edit</button></td>
					</tr>
					))}
				</tbody>
			</table>
		</div>
				
		)
	}
