import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import LoadingSpinner from './LoadingSpinner'
import { useApi } from './useApi';

const UserPage = () => {
	const { id } = useParams();

	//const [ data:eachData, isLoading, error]= useApi(`https://jsonplaceholder.typicode.com/users/${id}`)

	const [eachData, setUsers] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(response => response.json())
			.then(json => setUsers(json));
	}, []);

	console.log('Card, UserPage ', eachData);
	console.log('name UserPage', eachData.name);

	// if (isLoading) {
	//   return <LoadingSpinner />
	// }
	// if (error) {
	//   return <ErrorMessage error={error} />
  // }
  
  // Name- sujan 
  // Address: turku

	return (
		<>
			<div className="links">
				<Link to="/">Home</Link>
				<div> THIS is THE PROFILE OF THE PAGE</div>
			</div>
			<div className={`user-page user-type`}>
				<div className="user-image" />
				<div className="user-info">
					<div className="user-name">{eachData.name}</div>
					<div className="user-stats" data-testid="stats">
						<table>
							<tbody>
								{eachData.name},
								{eachData.id}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserPage;
