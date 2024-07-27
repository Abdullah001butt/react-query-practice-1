import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const query = useQueryClient();
  const navigate = useNavigate();
  const mutaion = useMutation({
    mutationFn: async (user) => {
      await fetch("https://66a3deab44aa63704582bdea.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    },
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutaion.mutate(user);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Create User</h2>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full p-3 pl-12 text-lg text-gray-700 border border-gray-300 rounded"
            required
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 pl-12 text-lg text-gray-700 border border-gray-300 rounded"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
