import React, { useState, createContext, ReactNode } from 'react';

type AuthContextData = {
    user: UserProps;
    IsAuthenticated: boolean;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const IsAuthenticated = !!user.name;

    return (
        <AuthContext.Provider value={{ user, IsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}