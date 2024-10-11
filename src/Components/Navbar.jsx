import React from "react";
import Logo from "../assets/Img/Logo.svg"
import DasBordLogo from "../assets/Img/DasbordLogo.svg"
import CalendarLogo from "../assets/Img/CalendarLogo.svg"
import LibraryLogo from "../assets/Img/LibraryLogo.svg"
import ClassRoomLogo from "../assets/Img/ClassRoomLogo.svg"
import CoursesLogo from "../assets/Img/CoursesLogo.svg"
import IntegrationLogo from "../assets/Img/IntegrationLogo.svg"
import AssigmentsLogo from "../assets/Img/AssigmentsLogo.svg"
import AtendanceLogo from "../assets/Img/AtendanceLogo.svg"
import MessageLogo from "../assets/Img/MessageLogo.svg"
import HelpLogo from "../assets/Img/HelpLogo.svg"
import SettingsLogo from "../assets/Img/SettingsLogo.svg"
import LogoutLogo from "../assets/Img/LogoutLogo.svg"
import { NavLink,  } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-[340px] h-[911px] overflow-y-scroll  bg-[#fff9f9] rounded-[20px] shadow-[4px_4px_10px_#00000040]">
      <div className="flex justify-around items-center pt-[30px] w-full ">
        <img src={Logo} alt="" />
        <div className="w-[170px] h-[54px]">
          <p className=" w-[170px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#de265d] text-[32px] tracking-[0] leading-[normal]">
            E
            <span className="[font-family:'Istok_Web-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">du</span>
          </p>
          <p className=" w-[170px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
            Learn
          </p>
        </div>
      </div>
      <div className="pt-[60px] ">
        <NavLink to="/Dashboard" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={DasBordLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Dashboard
          </p>
        </NavLink>
        <NavLink to="/Calender" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={CalendarLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Calender
          </p>
        </NavLink>
        <NavLink to="/Library" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={LibraryLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Library
          </p>
        </NavLink>
        <NavLink to="/Classroom" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={ClassRoomLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Classroom
          </p>
        </NavLink>
        <NavLink to="/Courses" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={CoursesLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Courses
          </p>
        </NavLink>
        <NavLink to="/Integration" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={IntegrationLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Integration
          </p>
        </NavLink>
        <NavLink to="/Assignments" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={AssigmentsLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Assignments
          </p>
        </NavLink>
        <NavLink to="/Attendance" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={AtendanceLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Attendance
          </p>
        </NavLink>
        <NavLink to="/Messages" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={MessageLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Messages
          </p>
        </NavLink>
        <NavLink to="/Help" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={HelpLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Help
          </p>
        </NavLink>
        <NavLink to="/Setting" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={SettingsLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Setting
          </p>
        </NavLink>
        <NavLink to="/Log-out" className={({ isActive }) => `flex w-full h-[82px] items-center ${isActive ? 'bg-[linear-gradient(203.14deg,_#ADBBDE_14.97%,_rgba(182,_188,_202,_0)_129.11%)]' : ''}`}>
          <img className="pl-[40px]" src={LogoutLogo} alt="" />
          <p className="pl-[35px]  [font-family:'Istok_Web-Bold',Helvetica] font-bold text-[#2B59CE] text-base tracking-[0] leading-[normal] ">
            Log out
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
