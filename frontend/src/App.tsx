import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch"
import Find from "./pages/Find";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { useEffect, useState } from "react";

import { ClubType } from "./components/ui/mainContentVertical/mainContentVertical";
import Club from "./pages/Club";
import DynamicClubRoutes from "./routes/dynamicClubRoutes";




function App() {




  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home></Home>} />
            <Route path="login" element={<Login/>} ></Route>
            <Route path="find" element={<Find/>} ></Route>
            <Route path="contact" element={<Contact />} ></Route>
            <Route path="test" element={<Test/>} ></Route>
            <Route path="*" element={<NoMatch />} ></Route>`
            <Route path="/find/:clubName" element={<Club/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
