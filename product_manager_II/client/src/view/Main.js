import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import DisplayAllProduct from "../components/DisplayAllProduct";

const Main = (props) => {
	const [productList, setProductList] = useState([]);

	return (
		<div>
			<CreateProduct productList={productList} setProductList={setProductList} />

			<DisplayAllProduct productList={productList} setProductList={setProductList} />
		</div>
	);
};

export default Main;
