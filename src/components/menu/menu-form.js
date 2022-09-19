import React, { Component } from "react";
import axios from "axios";

export default class MenuForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      image: "",
      calories: "",
      apiUrl: "https://robertgrahamky.pythonanywhere.com/item/",
      apiAction: "put"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.findNextSpot = this.findNextSpot.bind(this);
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }


  findNextSpot(menu) {
    if (menu.length > 0) {
      
      const lastItem = menu.slice(-1);
      return lastItem.id + 1;
    }
    else {
      return 0;
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const payload = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      descripción: "prototype",
      image: this.state.image,
      calories: this.state.calories,
    };
    console.log(this.props.menu);
    let tempId = this.findNextSpot(this.props.menu);
    const myUrl = this.state.apiUrl + tempId;
    axios
      .put(myUrl, payload)
      .then((response) => {
        this.props.handleNewFormSubmission(response);
        this.setState({
          name: "",
          description: "",
          price: "",
          image: "",
          calories: "",
        });
      })
      .catch((error) => {
        console.log("menu form handleSubmit error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="item-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            name="name"
            placeholder="Menu Item Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <div className="one-column">
          <input
            type="text"
            name="calories"
            placeholder="Calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />
        </div>

        <div className="one-column">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div className="one-column">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}
