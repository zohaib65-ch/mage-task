import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { RoutesModel } from "./models/routeModel";
import "./App.scss";
import { Toaster } from "react-hot-toast";
import routes from "./routes";

function App() {
  const renderLayout = (Component: any) => (props: any) =>
    (
      <Layout heading={props?.heading} isHeadingShow={props?.isHeadingShow}>
        <Component {...props} />
      </Layout>
    );

  const normalRoutes = () => {
    return createBrowserRouter(
      routes.map((e: RoutesModel) => ({
        path: e.path,
        element: renderLayout(e.Component)({
          heading: e.heading,
          isHeadingShow: true,
        }),
      }))
    );
  };

  const renderLoader = () => <h5 className="text-center my-4">Loader ....</h5>;

  return (
    <div className="app-section">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />

      <Suspense fallback={renderLoader()}>
        <RouterProvider router={normalRoutes()} />
      </Suspense>
    </div>
  );
}

export default App;
