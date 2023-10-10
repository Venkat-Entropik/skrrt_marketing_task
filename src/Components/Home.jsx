import React from "react";

const Home = () => {
  return (
    <div className="home">
      <nav>
        <ul>
          <li>Home</li>
          <li>The Cruise</li>
          <li>Services</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="info">
        <h1 className="text-light display-3">The Party Cruise Ship</h1>
        <h2 className="text-light display-6">
          An Extraordinary Social Cruise Experience in Halong Bay
        </h2>
        <p className="text-center text-light">
          Join the Oasis Bay Party Cruise and spend a special few days sailing
          through the UNESCO World Heritage of Halong Bay on a luxury cruise.
          Party the night away on our on board with funky music every night and
          a fun young crowd of 18-40 year olds.
        </p>
      </div>
    </div>
  );
};
export default Home;
