import React from "react";
import { Route, Routes } from "react-router-dom";
import Secureroutes from "../utils/secureroutes"
import Home from "../views/home";
import Profile from "../views/profile";
import Header from "../components/header";
import Devices from "../views/devices";
import Requests from "../views/requests";



export function GuestRoute() {
  return (
    <>
    
      <Routes>
        <Route element={<Secureroutes />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/requests" element={<Requests />} />
        </Route>
      </Routes>
    </>
  );
}
