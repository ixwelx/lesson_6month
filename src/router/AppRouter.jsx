import {Route, Routes, Navigate} from "react-router-dom"
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import {useAuthStore} from "../store/authStore.js";
import Profile from "../pages/Profile.jsx";

export default function AppRouter() {
    const {isAuth} = useAuthStore();

    return(
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />

            <Route
                path={"/"}
                element={isAuth ? <p>Welcome</p> : <Navigate to="/login" />}
            />

        </Routes>
    )
}
