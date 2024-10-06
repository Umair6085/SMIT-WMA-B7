// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowProducts from "../src/components/products/ShowProducts";
import AddProduct from "../src/pages/addProduct/AddProduct";
import UpdateProductPage from "../src/pages/updateProductPage/UpdateProductPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ShowProducts />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/update-product/:id" element={<UpdateProductPage />} />
                {/* Add a fallback route for 404 - Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

// Optional: Create a NotFound component
function NotFound() {
    return (
        <div className="container text-center mt-5">
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default App;
