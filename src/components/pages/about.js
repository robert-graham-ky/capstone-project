import React, { Component } from "react";
import Exterior from "../../images/exterior.jpg";
import Interior from "../../images/interior.jpg";
import Owner from "../../images/store-owner.jpg";
export default class About extends Component{
  render() {
    return (
      <div className="about-page-wrapper">
          {/*
          interior picture text description
          picture of people text description
          embedded google map exterior picture
          
          
          
          contact */}
        <div className="squares-wrapper">
            <div className="squares">
                <div className="square">
                    <div className="img-wrapper">
                        <img src={Interior} alt="square1"/>
                    </div>
                    <div class="square-text">
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non molestias ipsum officiis, quae, asperiores autem odit voluptatibus fuga obcaecati enim incidunt accusamus atque eius, ratione magnam maxime omnis error! Quidem qui voluptas in eveniet nam veniam nihil cum autem ipsa consectetur aut, consequuntur repudiandae temporibus ab. Quae odit exercitationem nesciunt?</p>
                    </div>
                </div>
                <div class="square">
                    <div class="square-text">
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non molestias ipsum officiis, quae, asperiores autem odit voluptatibus fuga obcaecati enim incidunt accusamus atque eius, ratione magnam maxime omnis error! Quidem qui voluptas in eveniet nam veniam nihil cum autem ipsa consectetur aut, consequuntur repudiandae temporibus ab. Quae odit exercitationem nesciunt?</p>
                    </div>
                    <div class="img-wrapper">
                        <img src={Owner} alt="square2"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d12542.902899879642!2d-84.8843935679576!3d38.19304466892016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x884274bf010ec137%3A0x853daf2a03e08fb2!2sKentucky%20State%20Capitol%2C%20700%20Capital%20Ave%2C%20Frankfort%2C%20KY%2040601!3m2!1d38.1867528!2d-84.87529719999999!5e0!3m2!1sen!2sus!4v1648108582484!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div className="exterior-wrapper">
            <img src={Exterior}/>
        </div>
      </div>
    );
  }
}