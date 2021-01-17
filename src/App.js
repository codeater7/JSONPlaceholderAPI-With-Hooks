import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserPage from './UserPage';
import UserList from './UserList';

const App = () => {
	const [userData, setUsers] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users?limit:9')
			.then(response => response.json())
			.then(data => {
				setUsers(data);
			});
	}, []);

	return (
		<Router>
			<Switch>
				<>
				  <div className ="App-header">Home Page</div>
					<Route exact path="/">
						<UserList userList={userData} />
					</Route>

					<Route path="/users/:id">
						<UserPage userList={userData} />
					</Route>
				</>
			</Switch>
		</Router>
	);
};

export default App;
