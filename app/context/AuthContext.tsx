"use client"

import { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
    email: string;
    token: string;
}
interface AuthContextType {
    user: User | null;
    fnStateLoggedIn: (userData: User) => void;
    fnStateLoggedOut: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
    children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Retrieve user from localStorage on mount
        const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
        if (storedUser) {
            setUser(storedUser); // Directly set the user state
        }
    }, []);

    console.log('AuthContext user state', user);

    function fnStateLoggedIn(userData: User) {
        setUser(userData); // Update user state directly
    };

    function fnStateLoggedOut() {
        setUser(null); // Clear user state
    };

    return (
        <AuthContext.Provider value={{ user, fnStateLoggedIn, fnStateLoggedOut }}>
            {children}
        </AuthContext.Provider>
    );
}
