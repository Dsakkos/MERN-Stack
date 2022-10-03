import React from "react";
import { useParams } from "react-router-dom";

const RouteComponent = (props) => {
	const { word, color, bgColor } = useParams();

	return <div>{isNaN(word) ? <p style={color ? { color: color, backgroundColor: bgColor } : null}>The Word is: {word} !!</p> : <p>The Number is : {word} !!</p>}</div>;
};

export default RouteComponent;
