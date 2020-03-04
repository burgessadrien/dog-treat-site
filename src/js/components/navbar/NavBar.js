// Navigation Bar

import React from 'react'
import {NavLink} from 'react-router-dom';
import { 
    faShoppingCart,
    faDollarSign
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//local components
import NavToggle from './NavToggle';
import ContentPaths from '../ContentPaths';
import NavList from './NavList';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-wrapper" >
                <div className="nav-logo" >
                    <NavLink to="/" >The Logo</NavLink>
                </div>
                <div className="flex-spacer" />
                <NavList items={ContentPaths} />
                <div>
                <NavLink to={ContentPaths[ContentPaths.length - 2].path} activeClassName="" >
                    <span><FontAwesomeIcon icon={faShoppingCart}/> </span>
                    <span>${this.props.totalValue}</span>
                </NavLink>
                </div>
                <NavToggle toggleHandler={this.props.toggleHandler} />
            </div>
        );
    }
}