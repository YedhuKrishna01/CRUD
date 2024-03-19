import React from "react";

function UpdateUser() {
  return (
    <div>
      <div className="flex justify-center h-screen bg-sky-200 items-center">
        <div className="flex flex-col p-5 w-[40vw] h-[65vh] bg-sky-700  rounded-lg text-white">
          <div className="text-3xl text-center border-2 ml-20 mt-5 w-72 border-white rounded-md p-2">
            Update User
          </div>
          <form className=" flex flex-col items-center">
            <label className="mt-3" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="w-[25vw] mt-3 rounded-sm placeholder:p-3"
              name="name"
              placeholder="Enter your name.."
            />
            <label className="mt-3" htmlFor="email">
              Email:{" "}
            </label>
            <input
              type="email"
              className="w-[25vw] mt-3 rounded-sm placeholder:p-3"
              name="email"
              placeholder="Enter your email.."
            />
            <label className="mt-3" htmlFor="age">
              Age:{" "}
            </label>
            <input
              type="number"
              className="w-[25vw] mt-3 rounded-sm placeholder:p-3"
              name="age"
              placeholder="Enter your age.."
            />
            <button
              className="mt-5 bg-white text-sky-700 p-2 rounded-md"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
