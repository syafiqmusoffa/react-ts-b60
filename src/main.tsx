import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { Provider as ChakraProvider } from "./components/ui/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ChakraProvider> */}
    <App />
    {/* </ChakraProvider> */}
  </StrictMode>
);
