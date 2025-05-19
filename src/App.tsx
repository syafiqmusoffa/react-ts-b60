import "./assets/styles/App.css";
// import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/auth";
// import Home from "./routes/home";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
