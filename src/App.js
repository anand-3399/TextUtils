import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');  // Wheather dark mode is enabled or not

  // Now making a state named as Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // This will show the alert
    setAlert({
      msg: message,
      type: type
    })

    // This will hide the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // Now this will set the Alert to an OBJECT

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d0d3f';
      showAlert("Dark mode has been enabled", "success");

      // document.title = "TextUtils - Dark Mode";

      /*
      // Setting the title of the page to change after every 2 seconds
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);

      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
      */

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

      // document.title = "TextUtils - Light Mode";
    }
  }


  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/TextUtils/about" element={<About mode={mode} />} />
            {/* 
              /users => Users component
              /users/home => User home component
              but react will do partial matching hence we use exact
            */}
            <Route exact path="/TextUtils/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />

            {/* <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} /> */}

          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
