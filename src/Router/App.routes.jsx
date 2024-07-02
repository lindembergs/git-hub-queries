import { Routes, Route } from "react-router-dom";
import { MyRepositories } from "../pages/MyRepositories";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { OtherRepositories } from "../pages/OtherRepositories";
import { Layout } from "../components/Layout";
import { SearchUsers } from "../pages/SearchUsers";

export const AppRouter = () => (
  <>
    <Layout></Layout>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<MyRepositories />} />
      <Route path="/outrosrepositórios" element={<OtherRepositories />} />
      <Route path="/buscarusuários" element={<SearchUsers />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </>
);
