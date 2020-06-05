import React, { Component } from 'react';
import Assist from '../../hoc/Assist';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: true })
    };

    sideDrawerOpendHandler = () => {
        this.setState({ showSideDrawer: false })
    };

    render() {
        
        return (
            <Assist>
                <Toolbar open={this.sideDrawerClosedHandler} />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                    opend={this.sideDrawerOpendHandler}
                />
                <main className={classes.Content} onClick={this.sideDrawerOpendHandler}>
                    {this.props.children}
                </main>
            </Assist>
        )
    }
};