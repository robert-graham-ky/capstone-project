import React, { Component } from "react";
import axios from "axios";

import MenuItem from "./menu-item";

export default class MenuContainer extends Component {
    constructor() {
        super();
    
        this.state = {
          pageTitle: "Welcome to La Unica",
          isLoading: false,
          data: [],
        };
        this.menuItems.bind(this);
    }

    getMenuItems(){
        axios.get("https://robertgrahamky.pythonanywhere.com/items")
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    menuItems() {
        console.log(this.state.data[0]);
        return this.state.data.map(item => (
        <MenuItem key={item.id} item={item} />
        ));
    }

    componentDidMount() {
        this.getMenuItems();
    }

    render() {
        return(
            <div className="outer-wrapper">
                <h2>Menu</h2>
                <div className="menu-items-wrapper">{this.menuItems()}</div>
            </div>
        )
    }
}