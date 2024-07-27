import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import CreateUser from "./CreateUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
