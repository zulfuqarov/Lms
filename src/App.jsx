import React from "react";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Classroom from "./Pages/Classroom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Context>
        <div className="flex">
          <div>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/Classroom" element={<Classroom />} />
            </Routes>
          </div>
        </div>
      </Context>
    </>
  );
};

export default App;
