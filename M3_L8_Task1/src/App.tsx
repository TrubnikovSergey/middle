import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import AuthProvider from "./components/authProvider";
import Logout from "./pages/logout";
import PrivateRoute from "./components/privateRoute";
import ErrorBoundary from "./components/errorBaundary";

const Hero = lazy(() => import("./pages/hero"));
const Category = lazy(() => import("./pages/category"));
const Episode = lazy(() => import("./pages/episode"));

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
                    <Suspense fallback={`Loading...`}>
                      <ErrorBoundary source="Hero">
                        <Hero />
                      </ErrorBoundary>
                    </Suspense>
                  </PrivateRoute>
                }
              />
              <Route
                path="category/:id?"
                element={
                  <PrivateRoute>
                    <Suspense fallback={`Loading...`}>
                      <ErrorBoundary source="Category">
                        <Category />
                      </ErrorBoundary>
                    </Suspense>
                  </PrivateRoute>
                }
              />
              <Route
                path="episode/:id?"
                element={
                  <PrivateRoute>
                    <Suspense fallback={`Loading...`}>
                      <ErrorBoundary source="Episode">
                        <Episode />
                      </ErrorBoundary>
                    </Suspense>
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
