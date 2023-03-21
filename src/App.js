import React from "react";
import Main from "./Forms";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import MainContant from "./pages/mainContant";
import Login from "./pages/login";
import Signup from "./pages/signup";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Users from "./pages/users";
import Header from "./components/header";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MainContant />,
  //     children: [
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/contact",
  //         element: <ContactUs />,
  //       },
  //       {
  //         path: "/home",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/user",
  //         element: <Users />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <Signup />,
  //   },
  // ]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainContant />}>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<Users />} />
        <Route path="/home" element={<Home />} />
      </Route>
    )
  );
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
