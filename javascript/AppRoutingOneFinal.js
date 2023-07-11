import React from "react";
import './App.css';
import  { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotfoundPage from './pages/404/NotfoundPage'
import DashBoard from "./pages/dashboard/DashBoard";
import LoginPage from "./pages/auth/LoginPage";


function AppRoutingOneFinal() {

    let loggedIn = true;


    return (
      <div>
        <Router>
            <Routes>
            <Route exact path="/" element={
              loggedIn ? (<Navigate replace to={'/dashboard'}/>)
                      : (<Navigate replace to={'/login'} />)
              } />  
          
          
            <Route exact path="/login" element={<LoginPage />} />


            <Route exact path="/dashboard" element={
              loggedIn ? (<DashBoard />)
                       : (<Navigate replace to={'/login'}/>)
            } />

            {/* Component not found */}
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default AppRoutingOneFinal;