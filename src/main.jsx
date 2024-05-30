import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import App from "./App.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Layout = () => {
  

  return (
    <Provider store={appStore}>
      <Header />
      <App/>
    </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/browse",
//         element: <Browse />,
//       },
//     ],
//   },
// ]);

root.render(<Layout/>);
