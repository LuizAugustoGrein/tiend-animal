import React, {useContext} from 'react';
import './TaskItem.css';

import axios from 'axios';

import { FiTrash2 } from "react-icons/fi";

import AccountContext from '../contexts/AccountContext';

const TaskItem = ({ title, description, id }) => {

    const { updateTasks } = useContext(AccountContext);

    function deleteTask () {
        axios.delete(`http://localhost:3333/tasks/${id}`)
        .then((response) => {
            updateTasks();
        })
    }

    return (
        <div className="task-item">
            <div className="task-content">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <button className="task-delete" onClick={deleteTask} >
                <FiTrash2 className="task-delete-icon" />
            </button>
        </div>
    );
};

export default TaskItem;
