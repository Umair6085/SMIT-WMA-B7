// src/store/slices/productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Base URL for the Fake Store API
const API_BASE_URL = "https://fakestoreapi.com/products";

// Fetch Products Thunk
export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_BASE_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch products.");
            }
            const data = await response.json();
            console.log("Fetched Products:", data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Add Product Thunk
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (product, { rejectWithValue }) => {
        try {
            const response = await fetch(API_BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            if (!response.ok) {
                throw new Error("Failed to add product.");
            }
            const data = await response.json();
            console.log("Added Product:", data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Update Product with PATCH Thunk
export const updateProductApiAction = createAsyncThunk(
    "product/updateProductPATCH",
    async (product, { rejectWithValue }) => {
        const { id, ...updatedFields } = product; // Exclude 'id' from the body
        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFields),
            });
            if (!response.ok) {
                throw new Error("Failed to update product.");
            }
            const data = await response.json();
            console.log("Updated Product with PATCH:", data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Delete Product Thunk - Returning id
export const deleteProductApiAction = createAsyncThunk(
    "product/deleteProduct",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete the product.");
            }
            // Instead of relying on the API's response, return the id directly
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Initial State
const initialState = {
    products: [],
    loading: false,
    error: null,
};

// Product Slice
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log("fetch products in reducer", action.payload);
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Product
            .addCase(deleteProductApiAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProductApiAction.fulfilled, (state, action) => {
                console.log("delete products in reducer", action.payload);
                const id = action.payload;
                state.products = state.products.filter(product => product.id !== id);
                state.loading = false;
            })
            .addCase(deleteProductApiAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to delete product.";
            })

            // Add Product
            .addCase(addProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                console.log("add product in reducer", action.payload);
                state.products = [action.payload, ...state.products];
                state.loading = false;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to add product.";
            })

            // Update Product
            .addCase(updateProductApiAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProductApiAction.fulfilled, (state, action) => {
                console.log("update product in reducer", action.payload);
                const updatedProduct = action.payload;
                const index = state.products.findIndex(product => product.id === updatedProduct.id);
                if (index !== -1) {
                    state.products[index] = updatedProduct;
                }
                state.loading = false;
            })
            .addCase(updateProductApiAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to update product.";
            });
    }
});

// Export Actions and Reducer
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
