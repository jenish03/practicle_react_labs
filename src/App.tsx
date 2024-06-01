import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";
import { Layout } from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserDataForm } from "./components/UserDataForm";
import RichTextEditor from "./components/RichTextEditor";
import { UserDetails } from "./components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/counter",
    element: (
      <Layout>
        <Counter />
      </Layout>
    ),
  },
  {
    path: "/user-form",
    element: (
      <Layout>
        <UserDataForm />
      </Layout>
    ),
  },
  {
    path: "/user-details",
    element: (
      <Layout>
        <UserDetails />
      </Layout>
    ),
  },
  {
    path: "/rich-text-edior",
    element: (
      <Layout>
        <RichTextEditor />
      </Layout>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
