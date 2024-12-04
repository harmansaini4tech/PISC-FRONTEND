import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        // console.log(apiData.data)
        setdata(apiData.data);
        return apiData.data;
      } catch (error) {
        alert(error)
      }
    };
    fetchData();
    return;
  }, [setdata]);

  const handleStatusData = (id) => {
    const newData = data.map((item) => {
      if (item.id == id) {
        return {
          userId: item.userId,
          id: item.id,
          title: item.title,
          completed: true
        }
      }
      else{
        return item
      }
    });
    setdata(newData)
  };

  const handleDeleteData = (id) => {
    const newData = data.filter((item) => item.id != id);
    setdata(newData);
  };

  

  return (
    <AppContext.Provider value={{ data,setdata, handleDeleteData, handleStatusData }}>
      {children}
    </AppContext.Provider>
  );
};
