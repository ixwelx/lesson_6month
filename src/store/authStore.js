import {create} from "zustand"
import {api} from "../api/axios.js"

export const useAuthStore = create((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuth: false,
    isLoading: false,
    error: null,
    profile: null,

    getProfile: async () =>{
        const res = (await api.get('/profile'))
        set({ profile: res.data })
    },

    logout: async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                await api.post("/auth/logout", { refreshToken });
            }
        } catch (error) {
            set({ error: error.response?.data?.message || "Logout failed" })
        }
        finally {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            set({ user: null, accessToken: null, refreshToken: null, isAuth: false });
        }
    },

    login: async (data) => {
        try {
            set({ isLoading: true, error: null });

            const res = await api.post("/auth/login", data);

            set ({
                user: res.data.user,
                accessToken: res.data.token.accessToken,
                refreshToken: res.data.token.refreshToken,
                isAuth: true
            })

            localStorage.setItem("accessToken", res.data.token.accessToken)
            localStorage.setItem("refreshToken", res.data.token.refreshToken)
        }
        catch(err) {
            set({ error: err.response?.data?.message || 'Login failed.' });
        }
        finally {
            set({ isLoading: false });
        }
    },

    register: async (data) => {
        try {
            set({ isLoading: true, error: null})
            await api.post('/auth/register', data)
        } catch (error) {
            set({ error: error.response?.data?.message || "Registration failed" })
        }
        finally {
            set({ isLoading: false})
        }
    }
}))
