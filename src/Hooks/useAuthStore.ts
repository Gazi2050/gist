import { AuthState } from "@/constants/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            username: null,
            email: null,
            isAuthenticated: false,
            authLoaded: false,
            //SIGN-UP
            signup: async (username, email, password) => {
                try {
                    const res = await fetch('/api/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, email, password }),
                    });

                    const data = await res.json();
                    if (!res.ok) throw new Error(data.message || 'Signup failed');

                    await get().signin(email, password);
                } catch (error) {
                    console.error('Signup error:', error);
                }
            },
            //SIGN-IN
            signin: async (email, password) => {
                try {
                    const res = await fetch(`/api/users?email=${email}&password=${password}`, {
                        method: 'GET',
                    });

                    const data = await res.json();
                    if (!res.ok) throw new Error(data.message || 'Login failed');

                    set({
                        username: data.username,
                        email: data.email,
                        isAuthenticated: true,
                        authLoaded: true,
                    });
                } catch (error) {
                    console.error('Login error:', error);
                    throw error;
                }
            },
            //SIGN-OUT
            signout: () => {
                set({ username: null, email: null, isAuthenticated: false, authLoaded: true });
                localStorage.removeItem('auth-storage');
            },
            setAuthLoaded: () => set({ authLoaded: true }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                username: state.username,
                email: state.email,
                isAuthenticated: state.isAuthenticated,
                authLoaded: state.authLoaded,
            }),
        }
    )
);

export default useAuthStore;
