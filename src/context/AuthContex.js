import React, { createContext, useState } from "react";

export const AuthContex = createContext();

const InitialState = {
    isAuthenticated: false,
    id: null,
    nombre: null,
}

export const AuthContexProvider = ({ children }) => {

    const [auth, setAuth] = useState(InitialState);

    const Login = (user) => {

        const { id, nombre } = user;

        setAuth({
            id,
            nombre,
            isAuthenticated: true
        });
    }

    return (
        <AuthContex.Provider value={{ auth, Login }}>
            {children}
        </AuthContex.Provider>
    )

}