import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TaskItem from "../components/TaskItem";
import AddTaskModal from "../components/AddTaskModal";

import AccountContext from '../contexts/AccountContext';

export default function Tasks () {

    const { tasks, updateTasks } = useContext(AccountContext);

    useEffect(() => {
        updateTasks();
    }, []);

    return (
        <div>
            {tasks.map((item) => (
                <TaskItem key={item.id} id={item.id} title={item.name} description={item.description}></TaskItem>
            ))}
            <AddTaskModal></AddTaskModal>
            
            <ToastContainer />
        </div>
    )
}