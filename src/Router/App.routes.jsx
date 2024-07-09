import { Routes, Route, useLocation } from "react-router-dom";
import { MyRepositories } from "../pages/MyRepositories";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { OtherRepositories } from "../pages/OtherRepositories";
import { Layout } from "../components/Layout";
import { SearchUsers } from "../pages/SearchUsers";

export const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Layout />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MyRepositories />} />
        <Route path="/outrosrepositórios" element={<OtherRepositories />} />
        <Route path="/buscarusuários" element={<SearchUsers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
// import { Routes, Route } from "react-router-dom";
// import { MyRepositories } from "../pages/MyRepositories";
// import { Login } from "../pages/Login";
// import { NotFound } from "../pages/NotFound";
// import { OtherRepositories } from "../pages/OtherRepositories";
// import { Layout } from "../components/Layout";
// import { SearchUsers } from "../pages/SearchUsers";

// const AuthenticatedRoutes = () => (
//   <Layout>
//     <Routes>
//       <Route path="/home" element={<MyRepositories />} />
//       <Route path="/outrosrepositórios" element={<OtherRepositories />} />
//       <Route path="/buscarusuários" element={<SearchUsers />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </Layout>
// );

// export const AppRouter = () => (
//   <Routes>
//     <Route path="/" element={<Login />} />
//     <Route path="/*" element={<AuthenticatedRoutes />} />
//   </Routes>
// );
