const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.getDisplayAllProducts);
	app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.getDisplayOneProduct);
    app.put("/api/products/:id", ProductController.editProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
};