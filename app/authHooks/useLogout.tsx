"use client"

import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/navigation";
export function useLogout() {
    const router = useRouter();
    const { fnStateLoggedOut } = useAuthContext(); // Use the login function directly
    
    async function fnLogout(): Promise<void> {
        localStorage.removeItem('user');
        fnStateLoggedOut();
        router.push('/');
    }

    

    return { fnLogout };
}
