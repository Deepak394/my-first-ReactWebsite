import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
      <Navbar title="TextUtils" homeText="Home" aboutText="About us" mode={mode}/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below"/> 
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
