import { Routes, Route } from "react-router-dom";
import { MyRepositories } from "../pages/MyRepositories";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { OtherRepositories } from "../pages/OtherRepositories";
import { Layout } from "../components/Layout";

export const AppRouter = () => (
  <>
    <Layout></Layout>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/meusrepositórios" element={<MyRepositories />} />
      <Route path="/outrosrepositórios" element={<OtherRepositories />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </>
);
