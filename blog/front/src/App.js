import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast";

import ArticleDetailPost from "./pages/articleDetail/ArticleDetailPost";
import HomePage from "./pages/home/Homepage";
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPost />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
