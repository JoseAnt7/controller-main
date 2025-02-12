import React, { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import { Pantalla_Operaciones } from "./operaciones";
import { useNavigate } from "react-router-dom";
import { useFlux } from "../../flux";

export const Dashboard = () => {
    const { store } = useFlux();
    const navigate = useNavigate();
    const [user, setUser] = useState(store.user || JSON.parse(localStorage.getItem("user"))); // Recuperar usuario si hay

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    return user ? (
        <div className="contenedor">
            <Sidebar />
            <Pantalla_Operaciones />
        </div>
    ) : null;
};