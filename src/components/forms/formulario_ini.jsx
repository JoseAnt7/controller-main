import React, { useState } from "react";
import ico_profile from "../../assets/img/profile/5087579.png";
import "../../assets/css/_form.css";
import { useFlux } from "../../flux";
import { Form_Registro } from "./formulario_reg.jsx";
import { useNavigate } from "react-router-dom";


export const Forms = () => {
    const [registro, setRegistro] = useState(false);
    const navigate = useNavigate();

    const changeOption = () => {
        setRegistro(!registro);
    };

    const { store, actions } = useFlux();
    const [usernameForm, SetUsername] = useState("")
    const [passwd, SetPasswd] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { username: usernameForm, email: usernameForm, password: passwd };
        await actions.iniciar_sesion(formData);
    
        setTimeout(() => {
            if (store.success) {
                navigate("/panel-control");
            }
        }, 2000);
    };

    return (
        <>
            {!registro && (
                <div className="d-flex flex-column gap-4 border rounded-4 form_container p-4">
                    <div className="d-flex flex-column align-items-center">
                        <img src={ico_profile} width="120px" alt="icono_perfil" />
                        <h3>Bienvenido</h3>
                    </div>
                    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                        <input className="form-control" type="text" placeholder="Usuario y/o email" value={usernameForm} onChange={(e) => SetUsername(e.target.value)} />
                        <input className="form-control" type="password" placeholder="Contraseña" value={passwd} onChange={(e) => SetPasswd(e.target.value)} />
                        <button className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                        </div>
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="#" onClick={changeOption}>Crear una cuenta</a>
                    </div>

                    {store.success && (
                        <div className="alert alert-success mt-3">{store.success}</div>
                    )}
                </div>
            )}

            {registro && (
                <Form_Registro registro={() => setRegistro(false)} />
            )}

        </>
    );
};
