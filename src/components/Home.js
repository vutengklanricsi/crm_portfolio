import React from "react";
import image from "../Photos-HD-Beach-Sand.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="ocean"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:">
        <h1 className="text-2xl text-blue-400 font-bold cursive leading-none lg:leading-snug home-name">Welcome to my portfolio page.</h1>
      </section>
    </main>
  );
}
