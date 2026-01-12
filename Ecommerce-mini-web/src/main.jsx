import ReactDOM from "react-dom/client";
import App from "./App";
import ApiContextProvider
 from "./context/apiContextProvider.jsx";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiContextProvider>
    <App />
  </ApiContextProvider>
);
