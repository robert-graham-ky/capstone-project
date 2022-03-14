import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
console.log(props.menu);
const MenuSidebarList = props => {
  const menuList = props.menu.map(menuItem => {
    return (
      <div key={menuItem.id} className="menu-item-deleter">
        <div className="menu-image-wrapper">
          <img src={menuItem.image} />
        </div>
        <div className="sidebar-text-wrapper">
            <h1 className="sidebar-title">{menuItem.name}</h1>
            <div className="icon-wrapper">
                <a className="trash-icon" onClick={() => props.handleDeleteClick(menuItem)}>
                    <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                </a>
            </div>
        </div>
      </div>
    );
  });

  return <div className="menu-sidebar-list-wrapper">{menuList}</div>;
};

export default MenuSidebarList;