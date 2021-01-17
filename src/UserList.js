import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const UserList = ({ userList }) => {
	return (
		<div className="list-container">
			{userList.map(({id, name, username, website }) => (
				<Link key={id} to={`users/${id}`} className="list-item">
				  
					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mx-auto User">	
					<div className ="User-image"><h1>{name[0]}</h1></div>
					<div className="User-info">
					<h2 className="User-title">{name}</h2>
					<p className="User-description-1"> @{username}</p>
					<p className="User-description">https://{website}</p></div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default UserList;
