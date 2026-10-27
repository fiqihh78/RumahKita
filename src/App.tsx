import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DetailRumah from "./pages/DetailRumah";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/rumah" element={<DetailRumah />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
