import React from "react";
import Context from "./context/Context";
import { Route, Routes, Navigate } from "react-router-dom";
import Classroom from "./Pages/Classroom";
import Navbar from "./Components/Navbar";
import NavbarHeader from "./Components/NavbarHeader";
import Liblry from "./Pages/Liblry";
import MyProfile from "./Pages/MyProfile";
import Calendar from "./Pages/Calendar";
import Integration from "./Pages/Integration";
import Message from "./Pages/Message";
import Attendance from "./Pages/Attendance";

// import Error from "./Pages/Error"

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
              {/* <Route path="/" element={<Navigate to="/Classroom" />} /> */}
              <Route path="/Classroom" element={<Classroom />} />
              <Route path="/Library" element={<Liblry />} />
              <Route path="/My-Profile" element={<MyProfile />} />
              <Route path="/Calender" element={<Calendar />} />
              <Route path="/Integration" element={<Integration />} />
              <Route path="/Messages" element={<Message />} />
              <Route path="/Attendance" element={<Attendance/>} />
              {/* <Route path="*" element={<Error/>} /> */}
            </Routes>
          </div>
        </div>
      </Context>
    </>
  );
};

export default App;
