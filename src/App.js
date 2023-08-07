import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { Home } from './Components/Home';
import Login from './Components/loginSignUp/Login';
import SignUp from './Components/loginSignUp/SignUp';

function App() {
  return (

    <div className="App">
<Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
</Router>

    </div>
  //  <>
  //  <Header/>
  //  <MainBody/>
  //  </>
  );
}

export default App;
