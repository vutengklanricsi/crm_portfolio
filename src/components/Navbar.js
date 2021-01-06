import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-blue-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 text-blue-50 hover:text-blue-800 text-4xl font-bold cursive tracking-widest"
          >
            Richard
          </NavLink>
          <NavLink
            to="post"
            activeClassName="text-blue-50 bg-blue-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="project"
            activeClassName="text-blue-50 bg-blue-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-50 bg-blue-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800"
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
