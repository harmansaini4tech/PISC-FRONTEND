import React, { useState } from "react";

const ControlledForm = () => {
  const [controlledData, setcontrolledData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleUsername = (e) => {
    setcontrolledData({ ...controlledData, username: e.target.value });
  };
  const handleEmail = (e) => {
    setcontrolledData({ ...controlledData, email: e.target.value });
  };

  const handlePhone = (e) => {
    setcontrolledData({ ...controlledData, phone: e.target.value });
  };

  const handlePassword = (e) => {
    setcontrolledData({ ...controlledData, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(controlledData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Controlled Form
        </h2>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={controlledData.username}
            onChange={handleUsername}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={controlledData.email}
            onChange={handleEmail}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={controlledData.phone}
            onChange={handlePhone}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={controlledData.password}
            onChange={handlePassword}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;
