import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {

    salad: 2,
    cheese: 1,
    bacon: 5,
    meat: 6,
}

class BurgerBuilder extends Component {


    state = {

        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 0,
            bacon: 0,
        },

        totalPrice: 0,
        purchasable: false,
        purchasing: false

    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert("Continued");
    }

    updatePurchaseState = (ingredients) => {

        const total = Object.keys(ingredients)
            .map((ing) => {

                return ingredients[ing];
            })
            .reduce((total, el) => {
                total += el;
                return total;
            }, 0);

        this.setState({ purchasable: total > 0 });
    }

    addIngredientHandler = (type) => {

        let ingNewCount = this.state.ingredients[type] + 1;
        let newPrice = this.state.totalPrice + INGREDIENT_PRICE[type]

        let newIngredints = {

            ...this.state.ingredients
        }

        newIngredints[type] = ingNewCount;
        this.setState({ ingredients: newIngredints, totalPrice: newPrice });
        this.updatePurchaseState(newIngredints);

    }

    removeIngredientHandler = (type) => {

        let ingNewCount = this.state.ingredients[type] - 1;

        if (ingNewCount < 0)
            return;

        let newPrice = this.state.totalPrice - INGREDIENT_PRICE[type]
        let newIngredints = {

            ...this.state.ingredients

        }

        newIngredints[type] = ingNewCount;
        this.setState({ ingredients: newIngredints, totalPrice: newPrice });
        this.updatePurchaseState(newIngredints);

    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        }

        for (const key in disableInfo)
            disableInfo[key] = disableInfo[key] <= 0;

        return (

            <Aux>
                <Modal show={this.state.purchasing} orderCancelled={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCancelled= {this.purchaseCancelHandler}
                    purchaseContinued= {this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );

    }
}


export default BurgerBuilder;