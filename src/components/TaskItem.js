import React from 'react';
import './TaskItem.css';

import { FiTrash2 } from "react-icons/fi";

const TaskItem = ({ title, description }) => {

    return (
        <div className="task-item">
            <div className="task-content">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <button className="task-delete">
                <FiTrash2 className="task-delete-icon" />
            </button>
        </div>
    );
};

export default TaskItem;
