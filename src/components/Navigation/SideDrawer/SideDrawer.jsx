import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Assist from '../../../hoc/Assist'

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Assist>
        <Backdrop 
        show={props.open} 
        clocked={props.closed}
        opend={props.opend}
        />
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo} 
        >
            <Logo/>
            </div>
            
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Assist>
    )
}

export default sideDrawer;