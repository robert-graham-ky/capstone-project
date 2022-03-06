import React, { Component } from "react";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { id, description, name, descripción, price, image, calories } = this.props.item;
    return (
        <div
        className={"item-wrapper"}
        >
            <div className="words-wrapper">
                <div className="item-name">
                    {name}
                </div>
                <div className="price">
                    <h1>${price}</h1>
                </div>
                <div className="calories">
                    <h1>Calories: {calories}</h1>
                </div>
                <div className="description">
                    {description}
                </div>
                
            </div>
            <div className="image">
              <div className="item-name">
                {name}
              </div>
              <img 
                src={image}
                alt="thing"
              />
            </div>
        </div>
    );
  }
}