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
        image: "",
        apiUrl: ("https://robertgrahamky.pythonanywhere.com/item/"),
        apiAction: "put"
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.componentConfig = this.componentConfig.bind(this);
      this.djsConfig = this.djsConfig.bind(this);
     // this.handleImageDrop = this.handleImageDrop.bind(this);
      
      //this.deleteImage = this.deleteImage.bind(this);

     // this.imageRef = React.createRef();
    }
  

    componentConfig() {
      return {
        iconFiletypes: [".jpg", ".png"],
        showFiletypeIcon: true,
        postUrl: "https://httpbin.org/post"
      };
    }

    /*handleImageDrop() {
      return {
      
        addedfile: file => 
        //select the file path
        //use img to base64 with the file path as parameter
        //put the string in the state
        //it gets uploaded to the api
        //later I'll pull that string and convert from base64 to image
        this.setState({image: theImg})
      };
    }*/

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
         "image": this.state.image};
         axios
            .get("https://robertgrahamky.pythonanywhere.com/items")
            .then(response => {
                const tempId = response.data.length;
                const myUrl = this.state.apiUrl+tempId;
                axios
                    .put(
                      /*"https://rtg-flask-api.herokuapp.com/item/"*/ myUrl, payload
                    )
                    .then(response => {
                        this.setState({
                          name: "",
                          description: "",
                          price: "",
                          image: ""
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