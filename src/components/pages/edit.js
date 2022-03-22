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

    //this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    //this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    //this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleEditClick = this.handleEditClick.bind(this);
    //this.clearMenuToEdit = this.clearMenuToEdit.bind(this);
  }

  getMenuItems() {
    axios
      .get(
        "https://robertgrahamky.pythonanywhere.com/items"
        /*{
          withCredentials: true
        }*/
      )
      .then(response => {
        this.setState({
          menuItems: response.data
        });
      })
      .catch(error => {
        console.log("error in getMenuItems", error);
      });
  }
  handleDeleteClick(menuItem) {
    axios
      .delete(
        `https://robertgrahamky.pythonanywhere.com/item/${menuItem.id}`/*,
        { withCredentials: true }*/
      )
      .then(response => {
        this.setState({
          menuItems: this.state.menuItems.filter(item => {
            return item.id !== menuItem.id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("handleDeleteClick error", error);
      });
  }
  handleSubmit(payload) {
    console.log(payload);
    debugger;
    axios
      .put(
        "https://robertgrahamky.pythonanywhere.com/items"/*${menuItems.length}`*/, payload
        /*{
          withCredentials: true
        }*/
      )
      .then(response => {
        console.log(response.data);
        /*this.setState({
          menuItems: menuItems.concat
        });*/
      })
      .catch(error => {
        console.log("error in handleSubmit", error);
      });
    this.getMenuItems();
  }

  componentDidMount() {
    this.getMenuItems();
  }

  render(){
    return (
      <div className = "edit-wrapper">
        <div className="add-wrapper">
          <h1>Add a menu item</h1>
          <MenuForm
            handleSubmit={this.handleSubmit}
            menu={this.state.menuItems}
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