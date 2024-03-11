import { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    {
      Name: "Yedhu",
      Email: "yedhu@gmail.com",
      Age: 21,
    },
  ]);
  return (
    <div>
      <div className="flex justify-center h-screen bg-sky-200 items-center">
        <div className="flex justify-center w-[40vw] bg-sky-700 rounded-md text-white">
          <table className="border-2 w-[86vw] text-center border-white m-5">
            <thead className="border-b-2">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Hobby</th>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Age}</td>
                    <td className="text-end">
                      <Link
                        to={"/update"}
                        className="p-1 bg-white text-sky-700 font-bold rounded-sm"
                      >
                        Edit
                      </Link>
                      <Link
                        to={"/update"}
                        className="p-1 ml-1 bg-white text-sky-700 font-bold rounded-sm"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link
            to={"/create"}
            className="mr-2 mt-2 p-2 h-10 bg-white text-sky-700 font-bold rounded-md"
          >
            Add+
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Users;
