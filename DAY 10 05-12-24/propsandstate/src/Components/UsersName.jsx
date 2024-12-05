import React, { useRef, useState } from "react";

const UsersName = () => {
  const [user, setuser] = useState([{ id: "", u: "" }]);
  const username = useRef();

  const handleUsers = (e) => {
    e.preventDefault();
    setuser([...user, { id: user.length, u: username.current.value }]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleUsers}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          USER-FORM
        </h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            ref={username}
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <table className="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Username
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((u) => {
              if (u.id != "") {
                return (
                  <tr key={u.id}>
                    <td className="border border-gray-300 px-4 py-2">{u.u}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersName;
