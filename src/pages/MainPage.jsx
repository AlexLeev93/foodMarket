import React from 'react'
import MenuSection from '../components/MenuSection/MenuSection';
import FoodConstructorImg from '../images/FoodConstructor.jpg';
import Sets from '../images/Sets.jpg';
import Ingredients from '../images/Ingredients.jpg';
import AboutUs from '../components/AboutUs/AboutUs';

const MainPage = () => {
    
    return(
        <div>
            <MenuSection path='/constructor' image={FoodConstructorImg} title='Конструктор меню'/>
            <MenuSection path='/sets' image={Sets} title='Сеты'/>
            <MenuSection path='/shop' image={Ingredients} title='Магазин'/>
            <MenuSection path='/basket' image={FoodConstructorImg} title='Корзина'/>
            <AboutUs title='О нас'/>
        </div>
    )
}

export default MainPage;