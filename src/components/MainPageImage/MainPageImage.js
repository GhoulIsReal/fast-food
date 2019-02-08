import React from 'react';
import './MainPageImage.css';
import image from './img/shaurma.jpg';

const MainPageImage = () => {

    return (
        <div id="main-page-image">
            <img src={image} alt="Шаурма"/>
        </div>
    )
}

export default MainPageImage;