import React, { useState, useEffect, useContext } from "react";
import Modal from 'react-modal';
import axios from 'axios';

import './AddTaskModal.css';

import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

import AccountContext from '../contexts/AccountContext';

const AddTaskModal = ({ }) => {
    const [formName, setFormName] = useState('');
    const [formDescription, setFormDescription] = useState('');

    const [nameCorrect, setNameCorrect] = useState(false);
    const [descriptionCorrect, setDescriptionCorrect] = useState(false);

    const [formCorrect, setFormCorrect] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    const { updateTasks } = useContext(AccountContext);

    function openModal() {
        setIsOpen(true);
        setNameCorrect(true);
        setDescriptionCorrect(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    async function createTask() {
        if (!formCorrect) {
            return;
        }
        await axios.post('http://localhost:3333/tasks', {
            name: formName,
            description: formDescription
        }).then(response => {
            updateTasks();
            closeModal();
            setFormName('');
            setFormDescription('');
        });;
    }

    useEffect(() => {
        var allCorrect = true;

        if (formName.length < 3) {
            setNameCorrect(false);
            allCorrect = false;
        } else {
            setNameCorrect(true);
        }

        if (formDescription.length < 3) {
            setDescriptionCorrect(false);
            allCorrect = false;
        } else {
            setDescriptionCorrect(true);
        }

        setFormCorrect(allCorrect);
    }, [formName, formDescription]);

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
                <TextArea label={'Descripción'} id={'description'} value={formDescription} setValue={setFormDescription} correct={descriptionCorrect} />
                <div>
                    <button className="secondary-btn modal-btn" onClick={closeModal}>Cancelar</button>
                    <button
                    className={`primary-btn modal-btn
                    ${!formCorrect ? 'disabled-btn' : ''}
                    `}
                    onClick={createTask} disabled={!formCorrect}>Guardar</button>
                </div>
            </Modal>
        </div>
        
    );
};

export default AddTaskModal;
