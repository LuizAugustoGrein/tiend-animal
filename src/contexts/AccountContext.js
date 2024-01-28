import React, { createContext, useState } from 'react';
import axios from 'axios';

const AccountContext = createContext();

export const AccountContextProvider = ({ children }) => {
    const [section, setSection] = useState(0);

    const [tasks, setTasks] = useState([]);

    const menuList = [
        { id: 1, name: 'Mis datos' },
        { id: 2, name: 'Mis tareas' },
        { id: 3, name: 'Mis devoluciones' },
        { id: 4, name: 'Mis comunicaciones' },
        { id: 5, name: 'Mis mejores amigos' }
    ];

    const updateTasks = () => {
        axios.get('http://localhost:3333/tasks')
        .then(response => {
            setTasks(response.data.tasks);
        });
    }

    const contextValue = {
      section,
      setSection,
      menuList,
      tasks,
      updateTasks
    }

    return (
        <AccountContext.Provider value={contextValue}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountContext;