import React from "react";
import "../../assets/css/_panel.css"
import { Navbar } from "../../components/panel/navbar";
import { Dashboard } from "../../components/panel/dashboard";
import { useFlux } from "../../flux";

export const Panel = () => {

    const { store } = useFlux();
    const username = store.username;

    return (
        <div className="background">
           <Navbar username={username}/>
           <Dashboard />
        </div>
    )


}