import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
