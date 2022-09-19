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
		<div>
			<form className="form col-4 mx-auto" onSubmit={createUser}>
				<div>
					<label className="form-label">First Name: </label>
					<input className="form-control" type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
					{first && first.length < 2 ? <h3 className="text-danger"> First Name Must be more then 2 characters</h3> : null}
				</div>
				<div>
					<label className="form-label">Last Name: </label>
					<input className="form-control" type="text" value={last} onChange={(e) => setLast(e.target.value)} />
					{last && last.length < 2 ? <h3 className="text-danger"> Last Name Must be more then 2 characters</h3> : null}
				</div>
				<div>
					<label className="form-label">Email Address: </label>
					<input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
					{email && email.length < 2 ? <h3 className="text-danger"> Email Must be more then 5 characters</h3> : null}
				</div>
				<div>
					<label className="form-label">Password: </label>
					<input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					{password && password.length < 2 ? (
						<h3 className="text-danger">
							Password Must be more then 8 characters <br /> Password Must Match
						</h3>
					) : null}
				</div>
				<div>
					<label className="form-label">Confirm Password: </label>
					<input className="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
				</div>
				<input type="submit" value="Create User" />
			</form>
		</div>
	);
};

export default UserForm;
