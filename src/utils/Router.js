import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom';
//View
import HomeView from '../views/HomeView';



function Router (props) {

  return (
    <BrowserRouter>
      <Routes>
        {/* main view */}
        {console.log("router")}
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;