import React, { useState, useEffect } from "react";
import Modal from 'react-modal';

import './AddTaskModal.css';

import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const AddTaskModal = ({ }) => {
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

    return (
        <div>
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
        </div>
        
    );
};

export default AddTaskModal;
