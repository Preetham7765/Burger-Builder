import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';


const controls = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},


];


const buildControls = (props) => {

    return (<div className = {classes.BuildControls}>
        <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p> 
        {controls.map( (element) => {
            return <BuildControl 
            key= {element.label} 
            label= {element.label}
            add = {()=>props.addIngredient(element.type)}
            remove = {()=>props.removeIngredient(element.type)}
            disableRemove = {props.disabled[element.type]}
            />
        })}
        <button 
        className={classes.OrderButton}
        disabled = {!props.purchasable}
        onClick = {props.ordered}
        >
        Order Now
        </button>
    </div>
    )
}

export default buildControls;