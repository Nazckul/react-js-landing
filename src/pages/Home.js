import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="/about">Go to About</Link>
      </p>
      <p>
        <Link to="/contact">Go to Contact</Link>
      </p>
    </div>
  );
}

export default Home;
