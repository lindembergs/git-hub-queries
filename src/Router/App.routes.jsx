import { Routes, Route } from "react-router-dom";
import { MyRepositories } from "../pages/MyRepositories";
import { Login } from "../pages/Login";
import { Aside } from "../components/Aside";
import { NotFound } from "../pages/NotFound";
import { OtherRepositories } from "../pages/OtherRepositories";

export const AppRouter = () => (
  <>
    <Aside></Aside>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<MyRepositories />} />
      <Route path="/outrosrepositórios" element={<OtherRepositories />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </>
);
