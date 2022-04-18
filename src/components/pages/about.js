import React, { Component } from "react";
import Footer from "../footer/footer";
import Interior from "../../images/interior.jpg";
import Owner from "../../images/store-owner.jpg";
export default class About extends Component {
  render() {
    return (
      <div className="about-page-wrapper">
        <div className="outer">
          <div className="squares-wrapper">
            <div className="squares">
              <div className="square">
                <div className="img-wrapper">
                  <img src={Interior} alt="square1" />
                </div>
                <div class="square-text">
                  <h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h1>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Non molestias ipsum officiis, quae, asperiores autem odit
                    voluptatibus fuga obcaecati enim incidunt accusamus atque
                    eius, ratione magnam maxime omnis error! Quidem qui voluptas
                    in eveniet nam veniam nihil cum autem ipsa consectetur aut,
                    consequuntur repudiandae temporibus ab. Quae odit
                    exercitationem nesciunt?
                  </p>
                </div>
              </div>
              <div class="square">
                <div class="square-text">
                  <h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h1>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Non molestias ipsum officiis, quae, asperiores autem odit
                    voluptatibus fuga obcaecati enim incidunt accusamus atque
                    eius, ratione magnam maxime omnis error! Quidem qui voluptas
                    in eveniet nam veniam nihil cum autem ipsa consectetur aut,
                    consequuntur repudiandae temporibus ab. Quae odit
                    exercitationem nesciunt?
                  </p>
                </div>
                <div class="img-wrapper">
                  <img src={Owner} alt="square2" />
                </div>
              </div>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.001791844937!2d-84.87730398472405!3d38.18663247968658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884274bf073ae28d%3A0x104eaffebb58cd18!2s700%20Capital%20Ave%2C%20Frankfort%2C%20KY%2040601!5e0!3m2!1sen!2sus!4v1649049782128!5m2!1sen!2sus"
              sandbox="allow-scripts"
            ></iframe>
             
          </div>
        </div>
        <div className="footer" id="about-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
