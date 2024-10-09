import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./layers/RootLayOut";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="product/details" element={<ProductDetails />}></Route>
      <Route path="/sign/up" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/my/Account" element={<MyAccount />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
