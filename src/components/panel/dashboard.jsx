import React, { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import { Pantalla_Operaciones } from "./operaciones";
import { useNavigate } from "react-router-dom";
import { useFlux } from "../../flux";

export const Dashboard = () => {
    const { store } = useFlux();
    const navigate = useNavigate();
    const user = store.user || JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [store.user, navigate]);

    return user ? (
        <div className="contenedor">
            <Sidebar />
            <Pantalla_Operaciones />
            <div>Bienvenido, {user.token}</div> {/* Mostrar el nombre del usuario */}
        </div>
    ) : null;
};