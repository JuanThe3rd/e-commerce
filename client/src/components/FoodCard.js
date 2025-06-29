import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function FoodCard({ product }){
    const history = useHistory();

    return (
        <div class='food-card'>
            <img class='food-img' alt={`${product.name}_img`} src={product.image} />
            <h3 class='product-name'>{product.name}</h3>
            <p class='product-price'>Price: ${product.price} / {product.quantity}</p>
            <button class='add-to-cart-bttn'>Add</button>
        </div>
    )
}

export default FoodCard;

/*

.button-10 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    border-radius: 6px;
    border: none;
    color: #fff;
    background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
    background-origin: border-box;
    box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-10:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
}

*/

