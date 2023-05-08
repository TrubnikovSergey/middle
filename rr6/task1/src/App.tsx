import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Layout from "./components/layout";
import Category from "./pages/category";
import Episode from "./pages/episode";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="hello">
          Добро пожаловать во вселенную
          <br />
          Рика и Морти.
        </div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/episode" element={<Episode />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
