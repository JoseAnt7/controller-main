import React, { useState } from "react";
import ico_profile from "../../assets/img/profile/5087579.png";
import { useFlux } from "../../flux";

export const Form_Registro = ({ registro }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const { store, actions } = useFlux()

    const handleSubmit = (e) => {
        const formData = { username: username, email: email, password: password };
        actions.registro(formData);
        registro

    }

    return (
        <div className="d-flex flex-column gap-4 border rounded-4 form_container p-4">
            <div className="d-flex flex-column align-items-center">
                <img src={ico_profile} width="120px" alt="icono_perfil" />
                <h3>Crear Cuenta</h3>
            </div>
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre de Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="form-control"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="form-control"
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className="btn btn-primary w-100">Registrar</button>
            </form>
            <div className="d-flex justify-content-center">
                <a href="#" onClick={registro}>
                    Ya tengo cuenta
                </a>
            </div>
            {store.success && (
                <div className="alert alert-success mt-3">{store.success}</div>
            )}
        </div>
    );
};