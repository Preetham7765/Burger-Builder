import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    toogleSideDrawerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer : !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar toogleSideDrawer={this.toogleSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </Aux>
        );
    }

}

export default Layout;