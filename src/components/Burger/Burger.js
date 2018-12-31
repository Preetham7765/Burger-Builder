import React from 'react';

import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.css'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((value) => {
            return [...Array(props.ingredients[value])]
                .map((_, i) => {
                    return <Ingredient key={value + i} type={value} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients to the burger</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
}


export default Burger;