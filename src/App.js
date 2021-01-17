import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserPage from './UserPage';
import UserList from './UserList';

const App = () => {
	const [userData, setUsers] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				setUsers(data);
			});
	}, []);
	// const { data:userData, error, isLoading } = useApi('https://jsonplaceholder.typicode.com/users')

	return (
		<Router>
			<Switch>
				<>
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
