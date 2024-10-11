import React from "react";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Classroom from "./Pages/Classroom";
import Navbar from "./Components/Navbar";
import NavbarHeader from "./Components/NavbarHeader";
import Liblry from "./Pages/Liblry";
import MyProfile from "./Pages/MyProfile";
import Calendar from "./Pages/Calendar";

const App = () => {
  return (
    <>
      <Context>
        <div className="flex">
          <div>
            <Navbar />
          </div>
          <div className="w-full h-full">
            <NavbarHeader />
            <Routes>
              <Route path="/Classroom" element={<Classroom />} />
              <Route path="/Library" element={<Liblry />} />
              <Route path="/My-Profile" element={<MyProfile />} />
              <Route path="/Calender" element={<Calendar />} />
            </Routes>
          </div>
        </div>
      </Context>
    </>
  );
};

export default App;
