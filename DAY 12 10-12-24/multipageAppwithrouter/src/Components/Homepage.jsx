import React from "react";
import { Link, useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();

  return (
    <div className="w-full h-auto flex justify-evenly">
      <div className=" m-4 relative w-64 h-64">
        <button
          onClick={() => (window.location.href = `https://www.google.com/`)}
          className="absolute bottom-0 w-full"
        >
          <img
            className="w-full h-auto"
            src="data:image/png;base64,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"
            alt="Clickable Image"
          />
        </button>
      </div>
      <div className=" m-4 relative w-64 h-64">
        <Link to="/" className="absolute bottom-0 w-full">
          <h1>{`Go Back to Home`}</h1>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
