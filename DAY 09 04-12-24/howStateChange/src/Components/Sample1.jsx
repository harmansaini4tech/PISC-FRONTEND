import React, { useState } from "react";

const Sample1 = () => {
  const [Sample1data, setSample1data] = useState();

  const name = <p className="text-2xl">My name is Harman.</p>;

  return (
    <>
      <span>{Sample1data}</span>
      <button
        onClick={() => setSample1data(name)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get my name
      </button>
    </>
  );
};

export default Sample1;
