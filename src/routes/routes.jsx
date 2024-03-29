import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ContactLayout from "../Layout/ContactLayout";
import ErrorPage from "../component/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'about-me',
          element: <About></About>
        },
      ]
    },
    {
      path:'contact',
      element: <ContactLayout></ContactLayout>,
      children: [
        {
          path:'contact-me',
          element: <Contact></Contact>
        }
      ]
    }
  ]);

export default router;