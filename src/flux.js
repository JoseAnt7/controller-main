import { useState } from 'react';

const getState = ({ getStore, getActions, setStore }) => {
    const API_URL = import.meta.env.VITE_BACKEND_URL;;

    return {
        store: {
            data: null,
            error: null,
            user: null,
            success: null
        },
        actions: {
            fetchData: async () => {
                try {
                    const response = await fetch('https://api.example.com/data');
                    const data = await response.json();
                    setStore({ data });
                } catch (error) {
                    setStore({ error });
                }
            },
            iniciar_sesion: async (formData) => {
                try {
                  const { username, email, password } = formData;
                  const response = await fetch(`${API_URL}/login`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password }),
                  });
              
                  if (!response.ok) {
                    throw new Error('Error en el inicio de sesión');
                  }
              
                  const data = await response.json();
                  setStore({ data, success: "Inicio de sesión exitoso", error: null });
                  console.log("Inicio de sesió exitoso")
                } catch (error) {
                  setStore({ error: error.message });
                }
              },
            registro: async (formData) => {
                try {
                    const { username, email, password } = formData;
                    const response = await fetch(`${API_URL}/register`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, email, password }),
                    });

                    if (!response.ok) {
                        throw new Error('Error en el registro');
                    }

                    const data = await response.json();
                    setStore({ data, success: "Inicio de sesión exitoso", error: null });
                } catch (error) {
                    setStore({ error: error.message });
                }
            },
        },
    };
};

export const useFlux = () => {
    const [store, setStore] = useState(getState({}).store);
    const actions = getState({ getStore: () => store, getActions: () => actions, setStore }).actions;

    return { store, actions };
};