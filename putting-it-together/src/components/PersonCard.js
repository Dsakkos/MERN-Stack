import React, { useState } from "react";

const PersonCard = (props) => {
	const [increaseAge, setIncreaseAge] = useState(props.age);

	return (
		<div>
			<p>
				{props.lastName} {props.firstName}
			</p>
			<p>Age: {increaseAge}</p>
			<p>Hair Color: {props.hairColor}</p>
			<button onClick={(event) => setIncreaseAge(increaseAge + 1)}>
				Birthday Button for {props.lastName} {props.firstName}
			</button>
		</div>
	);
};

export default PersonCard;
