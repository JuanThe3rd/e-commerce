import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import FoodCard from './FoodCard';

function Home(){
    const location = useLocation();

    const [foods, setFoods] = useState();
    const [veggies, setVeggies] = useState();
    const [fruits, setFruits] = useState();

    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(foods => {
                const temp_fruits = [];
                const temp_veggies = [];

                for(let i = 0; i < foods.length; i++){
                    if(foods[i].category === 'fruit'){
                        temp_fruits.push(foods[i]);
                    } else if (foods[i].category === 'vegetable'){
                        temp_veggies.push(foods[i]);
                    }
                }

                setVeggies(temp_veggies);
                setFruits(temp_fruits);
            })
    }, []);

    return (
        <page>
            <header className ='home-header'>
                <h1 class='home-title'>JMB Market</h1>
                <img class='home-logo' src='https://static.vecteezy.com/system/resources/previews/015/100/030/non_2x/apple-transparent-background-free-png.png' alt='Logo'/>
                <button class='cart-bttn'>
                    <img class ='cart-bttn-img' src='https://cdn.creazilla.com/icons/3247973/shopping-cart-add-icon-lg.png' alt='Cart'/>
                </button>
                <button class='hamburger-menu'>
                    <img class='hamburger-menu-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='Menu'/>
                </button>
            </header>

            <div class='fruits-container'>
                <h2 class='fruits-title'>Fruits</h2>
                {fruits?.map((fruit) => (
                    <FoodCard key={fruit.id} product={fruit}/>
                ))}
            </div>

            <div class = 'veggies-container'>
                <h2 class='veggies-title'>Vegetables</h2>
                {veggies?.map((veggie) => (
                    <FoodCard key={veggie.id} product={veggie}/>
                ))}
            </div>

            <footer class='home-footer'>
                This is the bottom of the website.
            </footer>
        </page>
    );
}

export default Home;