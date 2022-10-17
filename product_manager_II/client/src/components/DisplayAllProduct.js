import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAllProduct = (props) => {

	const { productList, setProductList } = (props);

	useEffect(() =>{
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => {
				console.log(res.data)
				setProductList(res.data)
			})
			.catch((err) =>{
				console.log(err)
			})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<div>
			<header>All Products:</header>
			{productList.map((product, index) => (
				<div key={index}>
					<Link to={`/product/${product._id}`}>{product.title}</Link>
				</div>
			))}
		</div>
	);
};

export default DisplayAllProduct;