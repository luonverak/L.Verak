import React from "react";
import Header from './screen/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./screen/MainContent";
import Skill from './screen/Skill';
import StudyAt from "./screen/Study";


const helloReactJs=()=>{
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainContent/>} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/study" element={<StudyAt/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default helloReactJs;