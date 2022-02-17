import React, { Component } from "react";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ menuItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ menuItemClass: "" });
  }

  render() {
    const { id, description, name, descripción, price, image } = this.props.item;
    return (
        <div
        className="item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        >
            <div className="words-wrapper">
                <div className="item-name">
                    {name}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="price">
                    {price}
                </div>
            </div>
            <div className="image">
              <img 
                src={image}
                alt="thing"
              />
            </div>
        </div>
    );
  }
}