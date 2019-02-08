import React from 'react';
import './Header.css';
import image from './img/fakelogo.png';

const Header = () => {

    return (
        <div id="header">
            <div className="logo-in-header-part"><img src={image} alt="fasfoodLogo"/></div>
            <div className="central-header-part"><p>Дамди .KZ</p></div>
            <div className="right-header-list-part">
                <a href="">Телефон</a>
                <a href="">Как заказать?</a>
                <a href="">Корзина</a>
            </div>
        </div>
    )
}

export default Header;