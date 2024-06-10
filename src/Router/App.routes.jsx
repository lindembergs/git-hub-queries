import { Routes, Route } from "react-router-dom";
import { MyRepositories } from "../pages/MyRepositories";
import { Login } from "../pages/Login";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<MyRepositories />} />
  </Routes>
);
