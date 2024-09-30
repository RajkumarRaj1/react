import React from "react";
import AppHeader from "./components/AppHeader";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="h-fit container mx-auto bg-red-50">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart/:productId" element={<Cart />} />
        <Route
          path="*"
          element={
            <div className="h-full bg-blue-300">
              <h1 className="text-5xl font-bold border-2 text-center h-screen">
                something went wrong
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
