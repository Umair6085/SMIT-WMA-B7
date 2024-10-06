// src/components/addProduct/AddProduct.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProductApiAction } from "../../store/slices/productSlice";
import Navbar from "../../components/navbar/Navbar";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import "./addProduct.css";

function AddProduct({ isUpdate = false, existingProduct = null }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Initialize state based on mode
    const [title, setTitle] = useState(isUpdate && existingProduct ? existingProduct.title : "");
    const [price, setPrice] = useState(isUpdate && existingProduct ? existingProduct.price : "");
    const [description, setDescription] = useState(isUpdate && existingProduct ? existingProduct.description : "");
    const [image, setImage] = useState(
        isUpdate && existingProduct
            ? existingProduct.image
            : "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    );
    const [category, setCategory] = useState(isUpdate && existingProduct ? existingProduct.category : "");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // For loading state
    const [apiError, setApiError] = useState(null); // For API errors

    // Yup validation schema
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters long"),
        price: Yup.number()
            .required("Price is required")
            .typeError("Price must be a number"),
        description: Yup.string()
            .required("Description is required")
            .min(3, "Description must be at least 3 characters long"),
        category: Yup.string()
            .required("Category is required")
            .min(2, "Category must be at least 2 characters long"),
        image: Yup.string()
            .required("Image is required")
            .url("Image must be a valid URL"),
    });

    // Validation function
    const validate = async () => {
        try {
            await validationSchema.validate(
                { title, price, description, image, category },
                { abortEarly: false }
            );
            setErrors({});
            return true;
        } catch (err) {
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
            return false;
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validate();
        if (isValid) {
            setLoading(true);
            setApiError(null);
            const product = {
                title,
                price: parseFloat(price),
                description,
                image,
                category,
            };
            try {
                if (isUpdate) {
                    await dispatch(updateProductApiAction({ id: existingProduct.id, ...product })).unwrap();
                } else {
                    await dispatch(addProduct(product)).unwrap();
                }
                navigate("/"); // Navigate back to products list
            } catch (error) {
                setApiError("An error occurred while saving the product.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <form className="formData p-4" onSubmit={handleSubmit}>
                            <h2 className="text-center mb-4">{isUpdate ? "Update Product" : "Add New Product"}</h2>
                            
                            {/* Product Name */}
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Product Name:</label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                />
                                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                            </div>

                            {/* Price */}
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price:</label>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                />
                                {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                            </div>

                            {/* Description */}
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description:</label>
                                <textarea
                                    placeholder="Description"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                    rows="3"
                                ></textarea>
                                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                            </div>

                            {/* Category */}
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category:</label>
                                <input
                                    type="text"
                                    placeholder="Category"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                                />
                                {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                            </div>

                            {/* Image URL */}
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image URL:</label>
                                <input
                                    type="text"
                                    placeholder="Paste URL here..."
                                    id="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                />
                                {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                            </div>

                            {/* API Error */}
                            {apiError && <div className="alert alert-danger">{apiError}</div>}

                            {/* Submit Button */}
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? (isUpdate ? "Updating..." : "Adding...") : isUpdate ? "Update" : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProduct;
