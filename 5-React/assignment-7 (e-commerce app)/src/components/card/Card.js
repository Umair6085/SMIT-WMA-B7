// src/components/card/Card.js

import React from "react";

export default function Card({ data, onClickDeleteProduct, onClickEditProduct }) {
    if (!data) {
        return null; // Prevent rendering if data is null
    }

    return (
        <div className="card h-100 shadow-sm">
            <img 
                src={data.image} 
                className="card-img-top p-3" 
                alt={data.title} 
                style={{ height: '200px', objectFit: 'contain' }} 
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text text-primary mb-4">${data.price}</p>
                <div className="mt-auto">
                    <button 
                        className="btn btn-danger me-2" 
                        onClick={onClickDeleteProduct}
                    >
                        Delete
                    </button>
                    <button 
                        className="btn btn-primary" 
                        onClick={onClickEditProduct}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
