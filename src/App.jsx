import React from 'react';
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes";
import { PhotoProvider } from "./PhotoContext";

function App() {
  return (
    <div className="App">
    <PhotoProvider>
      <RouterProvider router={router} />
    </PhotoProvider>
    </div>
  );
}

export default App;