import React, { useState, useRef, useContext } from "react";
import "./Menu.css";

import AccountContext from '../contexts/AccountContext';

export default function Menu () {
    const itemsRef = useRef(null);
    const [ isMouseDown, setIsMouseDown ] = useState(false);
    const [ startX, setStartX ] = useState(0);
    const [ scrollLeft, setScrollLeft ] = useState(0);

    const { section, setSection, menuList } = useContext(AccountContext);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
    }

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    }

    const handleMouseUp = () => {
        setIsMouseDown(false);
    }

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        itemsRef.current.scrollLeft = scrollLeft - walk;
    }

    const handleClick = (id) => {
        setSection(id);
    }

    return (
        <div className="chooseSection" ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
            {
                menuList.map((item) => (
                    <button className={`sectionItem
                    ${item.id == section ? 'selectedMenu' : ''}
                    `} key={item.name} onClick={() => handleClick(item.id)}>
                        {item.name}
                    </button>
                ))
            }
        </div>
    )
}