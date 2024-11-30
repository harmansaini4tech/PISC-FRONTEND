import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./Store/Context";

const App = () => {
  const { data, setdata, handleDeleteData, handleStatusData } =
    useContext(AppContext);

  const todo = useRef();
  const [successPopUp, setsuccessPopUp] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo.current.value.trim()=="")
      return

    setdata([
      ...data,
      {
        userId: 1,
        id: data[data.length-1].id+1,
        title: todo.current.value,
        completed: false,
      },
    ]);
  };

  const onDelete = (id)=>{
    handleDeleteData(id)

    setsuccessPopUp("Deleted")
  }

  const StatusChange = (id)=>{
    handleStatusData(id)
    setsuccessPopUp("Completed")
  }

  useEffect(() => {
    if (successPopUp) {
      const timer = setTimeout(() => {
        setsuccessPopUp("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [successPopUp, setsuccessPopUp]);


  return (
    <div className="h-screen flex flex-col items-center  p-4">
      {successPopUp && (
        <>
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-green-100 border border-green-300 w-60 h-60 flex items-center justify-center rounded-lg p-4">
              <p className="text-2xl font-bold text-green-700">
                {successPopUp}
              </p>
            </div>
          </div>
        </>
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <table className="table-auto w-full bg-gray-100 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                <input
                  ref={todo}
                  type="text"
                  placeholder="Enter text"
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </th>

              <th className="border border-gray-300 px-4 py-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </form>

      <table className="table-auto w-full mt-6 border-collapse border border-gray-300 max-w-5xl">
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ID</td>
            <td className="border border-gray-300 px-4 py-2">Title</td>
            <td className="border border-gray-300 px-4 py-2">Date</td>
            <td className="border border-gray-300 px-4 py-2">Status</td>
            <td className="border border-gray-300 px-4 py-2">Change Status</td>
            <td className="border border-gray-300 px-4 py-2">Delete</td>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {`${new Date().getDate()}/${
                    new Date().getMonth() + 1
                  }/${new Date().getFullYear()}`}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.completed ? "Completed" : "Incompleted"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => {StatusChange(item.id)}}
                    className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600"
                  >
                    Change Status
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
