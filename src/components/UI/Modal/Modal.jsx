import React, {Component} from 'react';

import classes from './Modal.module.css';
import Assist from '../../../hoc/Assist';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
            return nextProps.show !== this.props.show
        }

    componentWillUpdate() {
        console.log('willUpdate')
    }
    
    render() {
        return (
            <Assist>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            return (
        <div className={classes.Modal}
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }}>
            {this.props.children}
        </div>
        )
            </Assist>
            )
    }
};