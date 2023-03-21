import React, { useState } from "react";
import "./Home.css";
import items from "../../data/sidebar.json";
import SidebarItem from "./SidebarItem";
import NavMobile from "./NavMobile";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen containers">
      {/* <button className="btn block md:hidden">btn</button> */}
      <div className={`sidebar pt-8 hidden lg:block`}>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
      <div className="lg:hidden">
        <NavMobile />
      </div>
      <main className="children overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
