import { UserProvider } from "./contexts/Usercontext";
import { Routes } from "./Router";

function App() {
  return (
    <>
      <UserProvider>
        <Routes></Routes>
      </UserProvider>
    </>
  );
}

export default App;
