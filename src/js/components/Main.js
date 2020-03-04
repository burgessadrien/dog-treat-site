// Main Page

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import NavSide from './navbar/NavSide';
import Navbar from './navbar/NavBar';
import Content from './Content';
import Footer from './Footer';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            items: [],
            totalValue: 0
        };
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.getItems = this.getItems.bind(this);
        this.addItemHandler = this.addItemHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
        this.modifyItemsHandler = this.modifyItemsHandler.bind(this);
    }

    drawerToggleClickHandler(event) {
        event.stopPropagation();
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        });
    }

    getItems() {
        return this.state.items;
    }

    addItemHandler(item) {
        const itemPos = this.getItemPositionInItems(item);
        if (itemPos === -1) {
            this.state.items.push(item);
        } else {
            this.state.items[itemPos].quantity += item.quantity;
        }
        this.updateTotalValue(item.price * item.quantity);
    }

    removeItemHandler(item) {
        const itemPos = this.getItemPositionInItems(item);
        this.updateTotalValue(-1 * this.state.items[itemPos].quantity * item.price);
        this.state.items.splice(itemPos);
    }

    modifyItemsHandler(item) {
        const itemPos = this.getItemPositionInItems(item);
        this.updateTotalValue(-1 * (this.state.items[itemPos].quantity - item.quantity) * item.price);
        this.state.items[itemPos] = item;
    }

    getItemPositionInItems(item) {
        for(let i = this.state.items.length; i > 0; i--) {
            if(this.state.items[i - 1].name === item.name) {
                return i - 1;
            }
        }
        return -1;
    }

    updateTotalValue(value) {
        this.setState((prevState) => {
            return {
                totalValue: prevState.totalValue + value
            }
        });
    }

    render() {
        return (
            <div className="main">
                <Router>
                    {this.state.sideDrawerOpen ? <NavSide /> : null}
                    <Navbar toggleHandler={this.drawerToggleClickHandler} totalValue={this.state.totalValue} />
                    <Content
                        getItems={this.getItems}
                        totalValue={this.state.totalValue}
                        addItemHandler={this.addItemHandler}
                        removeItemHandler={this.removeItemHandler}
                        modifyItemsHandler={this.modifyItemsHandler}
                    />
                    <Footer />
                </Router>
            </div>
        );
    }
}
