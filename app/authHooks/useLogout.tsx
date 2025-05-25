"use client"

import { useAuthContext } from "./useAuthContext";

export function useLogout() {
    const { fnStateLoggedOut } = useAuthContext(); // Use the login function directly
    
    async function fnLogout(): Promise<void> {
        localStorage.removeItem('user');
        fnStateLoggedOut();
    }

    return { fnLogout };
}
