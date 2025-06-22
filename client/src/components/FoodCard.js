import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function FoodCard({ product }){
    const history = useHistory();

    return (
        <div class='food-card'>
            <p>This is {product.name}</p>
            <img class='food-img' alt={`${product.name}_img`} src={product.image} />
        </div>
    )
}

export default FoodCard;