import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
// import ContactPage from "./pages/ContactPage/ContactPage";


const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   // http://localhost:5173/#/contact
  //   path: "contact",
  //   element: <ContactPage />,
  // },
  // {
  //   // http://localhost:5173/#/page
  //   path: "page",
  //   element: <pageComponent />,
  // },
]);

const App = () => { 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
