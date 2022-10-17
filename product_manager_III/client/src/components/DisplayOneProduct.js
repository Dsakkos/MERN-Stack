import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DisplayOneProduct = (props) => {
	const { id } = useParams();
	const [DisplayOneProduct, setDisplayOneProduct] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/products/${id}`)
			.then((res) => {
				console.log(res.data);
				setDisplayOneProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const deleteHandler = () => {
		axios
			.delete(`http://localhost:8000/api/products/${id}`)
			.then((res) => {
				console.log(res);
				console.log(res.data);
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="DisplayOneProduct-component">
			<h2>{DisplayOneProduct.title}</h2>
			<p>Price: ${DisplayOneProduct.price}</p>
			<p>Description: {DisplayOneProduct.description}</p>
			<button onClick={deleteHandler}>Delete</button>
		</div>
	);
};

export default DisplayOneProduct;
