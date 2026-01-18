import {create} from "zustand";
import {api} from "../api/axios.js";

export const useProductStore = create((set) => ({
    products: [],
    productDetail: null,
    isLoading: false,

    getProducts: async () => {
        set({isLoading: true});

        const res = await api.get('/products');
        set({products: res.data, isLoading: false});
    },

    getProductById: async (productId) => {
        const res = await api.get(`/products/${productId}`);
        set({productDetail: res.data, isLoading: false});
    }
}))