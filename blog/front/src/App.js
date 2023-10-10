import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast";

import ArticleDetailPost from "./pages/articleDetail/ArticleDetailPost";
import HomePage from "./pages/home/Homepage";
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPost />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
