import React, {useContext} from "react";
import "./Content.css";

import AccountContext from '../contexts/AccountContext';

import Account from './Account';
import Tasks from './Account';

export default function Content () {
    const { section, setSection, menuList } = useContext(AccountContext);

    const renderContent = () => {
        switch (section) {
        case 1:
            return <Account></Account>;
        case 2:
            return <Tasks></Tasks>;
        default:
            return;
        }
    };

    const getNameById = () => {
        const menuItem = menuList.find(item => item.id === section);

        return menuItem ? menuItem.name : '';
      };

    return (
        <div className="container">
            <h3>{getNameById()}</h3>
            {renderContent()}
        </div>
    );
}