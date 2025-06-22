import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import FoodCard from './FoodCard';

function Home(){
    const location = useLocation();

    const [foods, setFoods] = useState();

    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(setFoods)
    }, []);

    return (
        <div>
            <div class='home-header'>
                <h1 class='home-title'>JMB Market</h1>
                <button class='hamburger-menu'>
                    <img class='hamburger-menu-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='Menu'/>
                </button>
            </div>

            <div class='food-container'>
                {foods?.map((food) => (
                    <FoodCard key={food.id} product={food}/>
                ))}
            </div>
        </div>
    );
}

export default Home;