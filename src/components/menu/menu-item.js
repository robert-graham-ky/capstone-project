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
          <div className="item-wrapper-content">
            <div className="words-wrapper">
                <div className="item-name">
                    {name}
                </div>
                <div className="price">
                    ${price}
                </div>
                
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="calories">
                    Calories: {calories}
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
        </div>
    );
  }
}