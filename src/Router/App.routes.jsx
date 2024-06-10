import { Routes, Route } from "react-router-dom";
import { MyRepositories } from "../pages/MyRepositories";
import { Login } from "../pages/Login";
import { Aside } from "../components/Aside";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => (
  <>
    <Aside></Aside>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<MyRepositories />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </>
);
