import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./App.routes";

export const Routes = () => {
  return (
    <Router>
      <AppRouter></AppRouter>
    </Router>
  );
};
