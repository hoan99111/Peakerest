import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./routes/homepage/HomePage.jsx";
import { CreatePage } from "./routes/createpage/CreatePage.jsx";
import { AuthPage } from "./routes/authpage/AuthPage.jsx";
import { PostPage } from "./routes/postPage/PostPage.jsx";
import { SearchPage } from "./routes/searchPage/searchPage.jsx";
import { ProfilePage } from "./routes/profilePage/profilePage.jsx";
import { MainLayout } from "./layout/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/pin/:id" element={<PostPage />}></Route>
          <Route path="/:username" element={<ProfilePage />}></Route>
        </Route>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
