import React, { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "./Homepage";

const Card = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=20"
        );
        setdata(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [setdata]);

  return (
    <>
      <div className="w-full h-auto m-4 flex flex-wrap gap-10">
        {data?.map((d) => {
          return (
            <div
              key={d.id}
              className="w-64 h-64 rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-32 object-cover"
                src={d.url}
                alt="Card image"
              />
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{d.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <Homepage></Homepage>
    </>
  );
};

export default Card;
