import React, { useState } from "react";
import "./SidebarItem.css";
import { AiFillCaretDown } from "react-icons/ai";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span onClick={() => setOpen(!open)}>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          {/* <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i> */}
          <AiFillCaretDown
            onClick={() => setOpen(!open)}
            className="bi-chevron-down toggle-btn"
          />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
};

export default SidebarItem;
