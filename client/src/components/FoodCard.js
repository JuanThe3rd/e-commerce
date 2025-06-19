import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function FoodCard(){
    const history = useHistory();

    return (
        <div class='food-card'>
            <p>This is where the food goes</p>
        </div>
    )
}

export default FoodCard;