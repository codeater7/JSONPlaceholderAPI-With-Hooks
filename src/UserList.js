import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const UserList = ({ userList }) => {
	return (
		<div className="list-container">
			{userList.map(({ id, firstLetter, name, username, email }) => (
				<Link key={id} to={`users/${id}`} className="list-item">
					<div className="list-item-name">
						{firstLetter},{name},{username},{email},
					</div>
				</Link>
			))}
		</div>
	);
};

export default UserList;
