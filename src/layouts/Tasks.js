import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiTrash2 } from "react-icons/fi";

import "./Tasks.css";

import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function Tasks () {

    useEffect(() => {
        
    }, []);

    const action = () => {
        toast("¡Guardado exitosamente!")
    }

    return (
        <div>
            <div className="task-item">
                <div className="task-content">
                    <h5>Titulo tarea</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna vehicula nisi aliquam pulvinar sit interdum eget ac. Rhoncus et nunc, aliquam, ac faucibus odio porta diam lorem. Dictum amet malesuada dictum tristique sollicitudin sed sagittis.</p>
                </div>
                <button className="task-delete">
                    <FiTrash2 className="task-delete-icon" />
                </button>
            </div>
            <div className="task-item">
                <div className="task-content">
                    <h5>Titulo tarea</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna vehicula nisi aliquam pulvinar sit interdum eget ac. Rhoncus et nunc, aliquam, ac faucibus odio porta diam lorem. Dictum amet malesuada dictum tristique sollicitudin sed sagittis.</p>
                </div>
                <button className="task-delete">
                    <FiTrash2 className="task-delete-icon" />
                </button>
            </div>

            <Button label={'Añadir tarea'} enabled={true} action={() => {}}></Button>
            
            <ToastContainer />
        </div>
    )
}