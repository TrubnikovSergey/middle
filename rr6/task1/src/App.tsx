import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Category from "./pages/category";
import Episode from "./pages/episode";
import Hero from "./pages/hero";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="hero/:id?" element={<Hero />} />
              <Route path="category/:id?" element={<Category />} />
              <Route path="episode/:id?" element={<Episode />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
