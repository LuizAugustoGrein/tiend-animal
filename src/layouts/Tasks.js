import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

import { FiTrash2 } from "react-icons/fi";

import "./Tasks.css";

import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

export default function Tasks () {

    const [formName, setFormName] = useState('');
    const [nameCorrect, setNameCorrect] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
        setNameCorrect(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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

            <Button label={'Añadir tarea'} enabled={true} action={openModal}></Button>

            <Modal
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0 ,0, 0.8)'
                    },
                    content: {
                        border: '1px solid green',
                        background: 'white',
                        borderRadius: '20px',
                        padding: '20px',
                        inset: '20px 20px auto 20px'
                    }
                }}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Añadir tarea"
            >
                <h2 className="modal-title">Añadir tarea</h2>
                <TextInput label={'Nombre'} id={'name'} value={formName} setValue={setFormName} correct={nameCorrect} />
                <TextArea label={'Descripción'} id={'description'} value={formName} setValue={setFormName} correct={nameCorrect} />
                <div>
                    <button className="secondary-btn modal-btn" onClick={closeModal}>Cancelar</button>
                    <button className="primary-btn modal-btn" onClick={closeModal}>Guardar</button>
                </div>
            </Modal>
            
            <ToastContainer />
        </div>
    )
}