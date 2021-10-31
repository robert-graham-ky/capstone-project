import React, { Component } from "react";
import axios from "axios";

import MenuForm from "../menu/menu-adder";

export default function() {
    return (
      <div className = "edit-wrapper">
        <h1>Add a menu item</h1>
        <MenuForm />
      </div>
    );
  }