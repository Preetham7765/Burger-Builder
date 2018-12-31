import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let cssClasses = [classes.SideDrawer];
    if(props.open) {
        cssClasses.push(classes.Open);
    }
    else {
        cssClasses.push(classes.Close);
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.close} />
            <div className={cssClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;