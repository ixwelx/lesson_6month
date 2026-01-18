import {Route, Routes, Navigate} from "react-router-dom"
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import {useAuthStore} from "../store/authStore.js";
import Profile from "../pages/Profile.jsx";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail.jsx";
import Cart from "../pages/Cart";

export default function AppRouter() {
    const {isAuth} = useAuthStore();

    return(
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/profile"
                element={isAuth ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route
                path="/cart"
                element={isAuth ? <Cart /> : <Navigate to="/login" />}
            />

            <Route
                path={"/"}
                element={isAuth ? <Products/> :<Navigate to="/login" />}
            />

        </Routes>
    )
}
