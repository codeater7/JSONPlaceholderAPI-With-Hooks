import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import LoadingSpinner from './LoadingSpinner'
import { useApi } from './useApi';

const UserPage = () => {
	const { id } = useParams();

	const [eachData, setUsers] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(response => response.json())
			.then(json => setUsers(json));
	}, []);

	return (
		<>
			<div className="links">
				<Link to="/">Back to Home</Link>
				<div className="links-title"> <p>Here is the user detail:</p></div>
			</div>
				
				<div className="user-info">
					<div  className="stats">
						<table>
							<tbody>
								name: {eachData.name}
								<br></br>
								username: {eachData.username}
								<br></br>
								email: {eachData.email}
								<br></br>
								phone:{eachData.phone}
								
								<br></br>
								website: https://{eachData.website}
								
							</tbody>
						</table>
					</div>
				</div>
			
		</>
	);
};

export default UserPage;
