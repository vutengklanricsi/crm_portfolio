import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 text-green-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Richard
          </NavLink>
          <NavLink
            to="post"
            activeClassName="text-green-100 bg-green-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="project"
            activeClassName="text-green-100 bg-green-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-green-100 bg-green-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/vutengklanricsi"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/richard-vuong-tan-quang-92875917a"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
