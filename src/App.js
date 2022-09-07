import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
const LazyDashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const LazyProducts = lazy(() => import("./pages/Products/Products"));
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyDashboard />
            </Suspense>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loading />}>
              <LazyProducts />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
