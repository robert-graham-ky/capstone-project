import React, { Component } from "react";
import axios from "axios";

import MenuForm from "../menu/menu-form";
import MenuSidebarList from "../menu/menu-sidebar-list";

export default class MenuEdit extends Component {
  constructor() {
    super();

    this.state = {
      menuItems: []
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
  }

  getMenuItems() {
    axios
      .get(
        "https://robertgrahamky.pythonanywhere.com/items"
      )
      .then((response) => {
        this.setState({
          menuItems: response.data
        });
      })
      .catch((error) => {
        console.log("error in getMenuItems", error);
      });
  }
  handleNewFormSubmission(menuItem) {
    this.setState({
      menuItems: this.state.menuItems.concat([menuItem])
    });
  }
  handleDeleteClick(menuItem) {
    axios
      .delete(
        `https://robertgrahamky.pythonanywhere.com/item/${menuItem.id}`
      )
      .then((response) => {
        this.setState({
          menuItems: this.state.menuItems.filter((item) => {
            return item.id !== menuItem.id;
          }),
        });

        return response.data;
      })
      .catch((error) => {
        console.log("handleDeleteClick error", error);
      });
  }

  componentDidMount() {
    this.getMenuItems();
  }

  render() {
    return (
      <div className="edit-wrapper">
        <div className="add-wrapper">
          <h1>Add a menu item</h1>
          <MenuForm 
            menu={this.state.menuItems}
            handleNewFormSubmission={this.handleNewFormSubmission}
          />
        </div>
        <div className="delete-wrapper">
          <MenuSidebarList
            handleDeleteClick={this.handleDeleteClick}
            menu={this.state.menuItems}
          />
        </div>
      </div>
    );
  }
}