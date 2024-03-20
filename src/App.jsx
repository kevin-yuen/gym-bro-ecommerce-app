import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// context
import LogoContextProvider from "./context/LogoContextProvider";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Landing from "./pages/Landing";
import SignIn from "./pages/auth/SignIn";
import CreateAccount from "./pages/auth/CreateAccount";
import ForgotPasword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/products/AllProducts";
import WomenActivewear from "./pages/products/WomenActivewear";
import MenActivewear from "./pages/products/MenActivewear";
import Supplements from "./pages/products/Supplements";
import AboutProduct from "./pages/products/AboutProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/women-activewear" element={<WomenActivewear />} />
        <Route path="/men-activewear" element={<MenActivewear />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/about-product" element={<AboutProduct />} />
      </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/forgotpassword" element={<ForgotPasword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default function App() {
  return (
    <LogoContextProvider>
      <RouterProvider router={router} />;
    </LogoContextProvider>
  );
}
