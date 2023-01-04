import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import Index from "./components/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/singup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
