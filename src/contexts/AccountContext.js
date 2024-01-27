import React, { createContext, useState } from 'react';

const AccountContext = createContext();

export const AccountContextProvider = ({ children }) => {
    const [section, setSection] = useState(0);

    const menuList = [
        { id: 1, name: 'Mis datos' },
        { id: 2, name: 'Mis tareas' },
        { id: 3, name: 'Mis devoluciones' },
        { id: 4, name: 'Mis comunicaciones' },
        { id: 5, name: 'Mis mejores amigos' }
    ];

    const contextValue = {
      section,
      setSection,
      menuList
    }

    return (
        <AccountContext.Provider value={contextValue}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountContext;