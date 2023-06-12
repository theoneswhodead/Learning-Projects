import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './routes/RootLayout';
import { Error } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
  },
]);


const App = () => {

  return (
    <RouterProvider router={router} />
    
  )
}

export default App
