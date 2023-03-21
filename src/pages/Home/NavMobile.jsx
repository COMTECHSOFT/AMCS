import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

import navigation from "../../data/sidebar.json";
import SidebarItem from "./SidebarItem";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <AiOutlineMenu className="w-8 h-8 m-2 text-black" />
        <div className=" flex flex-col items-center  gap-6 mt-32 text-blue-600 font-bold">
          <span>S</span>
          <span>I</span>
          <span>D</span>
          <span>E</span>
          <span>B</span>
          <span>A</span>
          <span>R</span>
        </div>
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full fixed top-0 left-0"
        style={{ backgroundColor: "rgba(22, 22, 22, 1)", color: "white" }}
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 left-6"
        >
          <ImCross className="w-8 h-8 text-white" />
        </div>
        {navigation.map((item, idx) => {
          if (item.childrens) {
            return (
              <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                  <span className="text-white" onClick={() => setOpen(!open)}>
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                  </span>
                  <i
                    className="bi-chevron-down toggle-btn text-white"
                    onClick={() => setOpen(!open)}
                  ></i>
                </div>
                <div className="sidebar-content text-white">
                  {item.childrens.map((child, index) => (
                    <SidebarItem key={index} item={child} />
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <a
                href={item.path || "#"}
                className="sidebar-item plain text-white"
              >
                {item.icon && <i className={item.icon}></i>}
                {item.title}
              </a>
            );
          }
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
