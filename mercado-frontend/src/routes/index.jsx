import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/register";
import { PageLogin } from "../pages/login";
import { ProfilePage } from "../pages/profile";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
