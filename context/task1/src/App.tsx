import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Category from "./pages/category";
import Episode from "./pages/episode";
import Hero from "./pages/hero";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import AuthProvider from "./components/authProvider";
import Logout from "./pages/logout";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                path="hero/:id?"
                element={
                  <PrivateRoute>
                    <Hero />
                  </PrivateRoute>
                }
              />
              <Route
                path="category/:id?"
                element={
                  <PrivateRoute>
                    <Category />
                  </PrivateRoute>
                }
              />
              <Route
                path="episode/:id?"
                element={
                  <PrivateRoute>
                    <Episode />
                  </PrivateRoute>
                }
              />
              <Route path="logout" element={<Logout />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
