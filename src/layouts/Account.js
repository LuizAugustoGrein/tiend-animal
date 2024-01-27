import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Account.css";

import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function Account () {
    
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');

    const [nameCorrect, setNameCorrect] = useState(false);
    const [emailCorrect, setEmailCorrect] = useState(false);
    const [phoneCorrect, setPhoneCorrect] = useState(false);

    const [formCorrect, setFormCorrect] = useState(false);

    useEffect(() => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const phone = localStorage.getItem('phone');

        setFormName(name);
        setFormEmail(email);
        setFormPhone(phone);
    }, []);

    useEffect(() => {
        var allCorrect = true;

        if (formName.length < 3) {
            setNameCorrect(false);
            allCorrect = false;
        } else {
            setNameCorrect(true);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formEmail)) {
            setEmailCorrect(false);
            allCorrect = false;
        } else {
            setEmailCorrect(true);
        }

        const phoneRegex = /^\d{9}$/;
        if(!phoneRegex.test(formPhone)) {
            setPhoneCorrect(false);
            allCorrect = false;
        } else {
            setPhoneCorrect(true);
        }

        setFormCorrect(allCorrect);
    }, [formName, formEmail, formPhone]);

    const action = () => {
        if (!formCorrect) {
            return;
        }
        localStorage.setItem('name', formName);
        localStorage.setItem('email', formEmail);
        localStorage.setItem('phone', formPhone);

        toast("¡Guardado exitosamente!")
    }

    return (
        <div className="account-form">
            <TextInput label={'Nombre'} id={'name'} value={formName} setValue={setFormName} correct={nameCorrect} />
            <TextInput label={'Email'} id={'email'} value={formEmail} setValue={setFormEmail} correct={emailCorrect} />
            <TextInput label={'Teléfono'} id={'phone'} value={formPhone} setValue={setFormPhone} correct={phoneCorrect} />
            <Button label={'Guardar'} enabled={formCorrect} action={action}></Button>
            <ToastContainer />
        </div>
    )
}