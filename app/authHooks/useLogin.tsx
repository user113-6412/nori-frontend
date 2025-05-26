"use client"

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/navigation";

export function useLogin() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { fnStateLoggedIn } = useAuthContext(); // Use the login function directly
    
    const router = useRouter();

    async function fnLogin(email: string, password: string) {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
                return;
            }

            // Save the user to localStorage
            localStorage.setItem('user', JSON.stringify(json));

            // Update auth context using login function
            fnStateLoggedIn(json);
            setIsLoading(false);

            console.log('VJ user and token received by frontend');

            router.push('/blog');

        } catch (err) {
            setIsLoading(false);
            setError('Something went wrong. Please try again later.');
            console.error(err);
        }
    }

    return { fnLogin, isLoading, error };
}
