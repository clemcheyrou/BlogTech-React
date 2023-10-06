import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import ArticleDetailPost from "./pages/articleDetail/ArticleDetailPost";
import HomePage from "./pages/home/Homepage";

function App() {
  return (
    <div className="App">
      <h1 className='text-red-500'>lol</h1>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPost />} />
      </Routes>
    </div>
  );
}

export default App;
