import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
}

export default About;
