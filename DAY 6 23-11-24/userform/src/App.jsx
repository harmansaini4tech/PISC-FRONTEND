import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const username = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const password = useRef("");

  const [usernameError, setusernameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [onOk, setonOk] = useState(false);

  const userFormValidation = {
    usernameV: /^[^\s]+$/,
    emailV: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phoneV: /^\d{10}$/,
    passwordV: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const testData = {
      username: username.current.value,
      email: email.current.value,
      phone: phone.current.value,
      password: password.current.value,
    };

    if (!userFormValidation.usernameV.test(testData.username)) {
      setusernameError(true);
    } else {
      setusernameError(false);
    }
    if (!userFormValidation.emailV.test(testData.email)) {
      setemailError(true);
    } else {
      setemailError(false);
    }
    if (!userFormValidation.phoneV.test(testData.phone)) {
      setphoneError(true);
    } else {
      setphoneError(false);
    }
    if (!userFormValidation.passwordV.test(testData.password)) {
      setpasswordError(true);
    } else {
      setpasswordError(false);
    }

    if (
      usernameError == false &&
      emailError == false &&
      phoneError == false &&
      passwordError == false
    ) {
      console.log(testData);
      setuserData({
        username: testData.username,
        email: testData.email,
        phone: testData.phone,
        password: testData.password,
      });
    }
  };

  useEffect(() => {
    if (onOk) {
      setuserData({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
      setonOk(false);
    }
  }, [onOk, setonOk, setuserData]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {userData.email && (
        <>
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-green-100 border border-green-300 w-3/5 h-4/6 rounded-lg p-4 relative">
              <button
                onClick={() => setonOk(true)}
                className="absolute top-2 right-2 text-green-700 font-bold text-xl"
              >
                &times;
              </button>

              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-2xl font-bold text-green-700 mb-8">
                  Username : {userData.username}
                </p>
                <p className="text-2xl font-bold text-green-700 mb-8">
                  Email : {userData.email}
                </p>
                <p className="text-2xl font-bold text-green-700 mb-8">
                  Phone : {userData.phone}
                </p>
                <p className="text-2xl font-bold text-green-700 mb-8">
                  Password : {userData.password}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setonOk(true)}
                    className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* {userData && <div>{userData.email}</div>} */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            ref={username}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          {usernameError && <p className="text-red-500">User name should be</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            ref={email}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          {emailError && <p className="text-red-500">Email should be vaild</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            ref={phone}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          {phoneError && (
            <p className="text-red-500">
              Phone number must contains 10 numbers
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={password}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          {passwordError && (
            <p className="text-red-500">
              Password at least should be min 6 char and including 0-1,aA-zZ and
              !@#$%^&*
            </p>
          )}
        </div>

        <button
          type="submit"
          name="signup"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default App;
