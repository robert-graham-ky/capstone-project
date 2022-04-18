import React from "react";

import MenuContainer from "../menu/menu-container";
import Footer from "../footer/footer";
export default function () {
  return (
    <div className="homepage-wrapper">
      <div className="outer">
        <MenuContainer />
      </div>
      <div id="menu-footer">
        <Footer />
      </div>
    </div>
  );
}
