import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ArticleEditor from './components/Articles/ArticleEditor';
import reportWebVitals from './reportWebVitals';
import Articles from "./components/Articles/Articles";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/profile" element={<App />} />
              <Route path="/profile/write_article" element={<ArticleEditor />} />
              <Route path="/profile/articles" element={<Articles />} />
              <Route
                  path="*"
                  element={
                      <Navigate to="/profile" />
                  }
              />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();