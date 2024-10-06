// src/components/showProducts/ShowProducts.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, deleteProductApiAction } from '../../store/slices/productSlice';
import Card from "../card/Card";
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

export default function ShowProducts() {
    const products = useSelector(store => store.productSlice.products);
    const loading = useSelector(store => store.productSlice.loading);
    const error = useSelector(store => store.productSlice.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    const onClickDeleteProduct = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            console.log("Delete product id:", id);
            dispatch(deleteProductApiAction(id));
        }
    };

    const onClickEditProduct = (product) => {
        navigate(`/update-product/${product.id}`, { state: { product } });
    };

    return (
        <>
          <Navbar />
            <div className="container mt-4">
                {/* Optional: Add a button to navigate to Add Product */}
                <div className="d-flex justify-content-end mb-3">
                    <button 
                        className="btn btn-success" 
                        onClick={() => navigate('/add-product')}
                    >
                        Add New Product
                    </button>
                </div>

                <div className="row g-4">
                    {/* Display loading indicator */}
                    {loading && (
                        <div className="col-12 text-center">
                            <p>Loading products...</p>
                        </div>
                    )}

                    {/* Display error message */}
                    {error && (
                        <div className="col-12 text-center text-danger">
                            <p>Error: {error}</p>
                        </div>
                    )}

                    {/* Display product cards */}
                    {products && products.length > 0 ? (
                        products.map(product => (
                            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
                                <Card 
                                    data={product} 
                                    onClickDeleteProduct={() => onClickDeleteProduct(product.id)} 
                                    onClickEditProduct={() => onClickEditProduct(product)} 
                                />
                            </div>
                        ))
                    ) : (
                        !loading && !error && (
                            <div className="col-12 text-center">
                                <p>No products available.</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}
