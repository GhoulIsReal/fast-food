import React from 'react';
import './CustomBar.css';

const CustomBar = () => {

    return (
        <div id="custom-bar">
            <ul className="menu-list">
                <li>
                    <a href="">Донеры</a>                 
                </li>
                <li>
                    <a href="">Пиццы</a> 
                </li>
                <li>
                    <a href="">Бургеры</a> 
                </li>
                <li>
                    <a href="">Напитки</a> 
                </li>
            </ul>
        </div>
    )
}

export default CustomBar;