import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  const [dropdown, setdropdown] = useState(null);

  const handleDropDown = (drop) => {
    if (dropdown == "drop1") {
      setdropdown(null);
    }
    if (dropdown == "drop2") {
      setdropdown(null);
    }
    if (dropdown == "drop3") {
      setdropdown(null);
    }
    if (dropdown == null && drop == "drop1") {
      setdropdown("drop1");
    }
    if (dropdown == null && drop == "drop2") {
      setdropdown("drop2");
    }
    if (dropdown == null && drop == "drop3") {
      setdropdown("drop3");
    }
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-red-500">
            <Link to="/">MyLogo</Link>
          </div>

          <nav className="flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => handleDropDown("drop1")}
                className="text-gray-700 hover:text-red-500 focus:outline-none"
              >
                About
              </button>

              {dropdown == "drop1" && (
                <>
                  <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </Link>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => handleDropDown("drop2")}
                className="text-gray-700 hover:text-red-500 focus:outline-none"
              >
                Card
              </button>
              {dropdown == "drop2" && (
                <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <Link
                    to="/card"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </Link>
                  <Link
                    to="/card"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => handleDropDown("drop3")}
                className="text-gray-700 hover:text-red-500 focus:outline-none"
              >
                Contact Us
              </button>
              {dropdown == "drop3" && (
                <div className="absolute  mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
