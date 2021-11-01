import React, { Component } from "react";
import axios from "axios";
import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class MenuForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        description: "",
        price: "",
        apiUrl: ("http://rtg-flask-api.herokuapp.com/item/"),
        apiAction: "put"
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    djsConfig() {
      return {
        addRemoveLinks: true,
        maxFiles: 1
      };
    }
  
    
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
        const payload = 
        {"name": this.state.name,
         "description": this.state.description, 
         "price": this.state.price,
         "descripción": "prototype",
         "image": "prototype"};
         //tempId is a temporary, slow, and lazy way to track which url to use for the api
         axios
            .get("https://rtg-flask-api.herokuapp.com/items")
            .then(response => {
                const tempId = response.data.length;//this is wrong
                const myUrl = this.state.apiUrl+tempId;
                axios
                    .put(
                        myUrl, payload
                    )
                    .then(response => {
                        this.setState({
                          name: "",
                          description: "",
                          price: ""
                        });
                    })
                    .catch(error => {
                        console.log("menu form handleSubmit error", error);
                    });
            })
            .catch(error => {
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
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
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