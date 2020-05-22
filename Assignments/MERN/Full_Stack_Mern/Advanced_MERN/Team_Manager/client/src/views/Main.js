import React, { useState, useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default () => {
	const [allPlayers, setAllPlayers] = useState(null);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:8000/api/player')
		  .then(response => setAllPlayers(response.data))
		  .catch(() => setHasError(true));
		 }, [allPlayers]);

	function handleDelete(id) {
		axios.delete('http://localhost:8000/api/player/' + id)
			.then(() => setAllPlayers(allPlayers.filter(player => player._id !== id)))
		}
	if(hasError) return 'Something went wrong!';

	if(allPlayers=== null) return 'Loading...';
	return( 
		<div>
		<h1>Manage Players</h1>
		<h2>List|<Link to="/players/addplayer">Add Player</Link></h2>
			<table>
				<thead>
					<tr>
						<th>Team Name</th>
						<th>Preferred Position</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{allPlayers.map(player=>(
					<tr key={player._id}>
						<td>{player.name}</td>
                        <td>{player.position}</td>
						<td><button onClick={() => handleDelete(player._id)}>Delete</button></td>
					</tr>
					))}
				</tbody>
			</table>
		</div>
				
		)
	}
