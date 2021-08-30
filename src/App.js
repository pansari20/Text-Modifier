import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Notfound from './components/Notfound';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

function App() {
  // Dark Mode Functions
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#192538';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="Text Modifier" aboutText="Welcome! Made by Ayush Pansari " mode={mode} toggleMode={toggleMode} />
    <TextForm mode={mode} />
    {/* // <Router>
    //   <Switch>
    //     <Route exact path="/about">
    //       <About mode={mode} />
    //     </Route>
    //     <Route exact path="/">
    //     </Route>
    //     <Notfound mode={mode} />
    //   </Switch>
    // </Router> */}
    </>
  );
}

export default App;
