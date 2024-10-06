// src/pages/UpdateProductPage.js

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddProduct from "../addProduct/AddProduct";

export default function UpdateProductPage() {
    const { id } = useParams();
    const location = useLocation();
    const productFromState = location.state?.product;

    // Attempt to find the product in Redux store; fallback to location.state
    const product = useSelector((state) =>
        state.productSlice.products.find((prod) => prod.id === parseInt(id))
    ) || productFromState;

    if (!product) {
        return (
            <div className="container text-center mt-5">
                <h2>Product Not Found</h2>
                <p>The product you are trying to update does not exist.</p>
            </div>
        );
    }

    return <AddProduct isUpdate={true} existingProduct={product} />;
}
