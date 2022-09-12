import React, { useState } from "react";

const UserForm = (props) => {
	const [first, setFirst] = useState();
	const [last, setLast] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const createUser = (e) => {
		// we must prevent the default refresh of the browser to keep our state from being reset
		e.preventDefault();

		// shorthand ES6 syntax for building an object - see notes above
		const newUser = { first, last, email, password, confirmPassword };
		console.log("Welcome", newUser);
		setFirst("");
		setLast("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	return (
		<>
			<form onSubmit={createUser}>
				<div>
					<label>First Name: </label>
					<input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
				</div>
				<div>
					<label>Last Name: </label>
					<input type="text" value={last} onChange={(e) => setLast(e.target.value)} />
				</div>
				<div>
					<label>Email Address: </label>
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label>Password: </label>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div>
					<label>Confirm Password: </label>
					<input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
				</div>
				<input type="submit" value="Create User" />
			</form>
			<div>
				<p>First Name:{first}</p>
				<p>Last Name:{last}</p>
				<p>Email: {email}</p>
				<p>Password: {password}</p>
				<p>Confirm Password: {confirmPassword}</p>
			</div>
		</>
	);
};

export default UserForm;
