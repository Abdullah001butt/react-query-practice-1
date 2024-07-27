import React from "react";
import { useQuery } from "@tanstack/react-query";
import "./Users.css";
import { Link } from "react-router-dom";

const fetchUsers = async () => {
  const res = await fetch("https://66a3deab44aa63704582bdea.mockapi.io/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["User"],
    queryFn: fetchUsers,
    staleTime: 5000
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-16 h-16 border-8 rounded-full text-blue-600 pulse"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-lg text-gray-600">
          Sorry, we were unable to load the user list.
        </p>
        <p className="text-lg text-gray-600">Error message: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.25 px-1 rounded"
        >
          Add User
        </Link>
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded shadow-md p-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-lg">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
