import React from "react";

const PersonCard = (props) => {
	return (
		<div>
			<p>
				{props.lastName} {props.firstName}
			</p>
			<p>Age: {props.age}</p>
			<p>Hair Color: {props.hairColor}</p>
		</div>
	);
};

export default PersonCard;
