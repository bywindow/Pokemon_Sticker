import React, { useStatem, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom';
//View
import HomeView from '../views/HomeView';
import HomeModel from '../model/HomeModel';
import StoreModel from '../model/StoreModel';



function Router (props) {

  return (
    <BrowserRouter>
      <Routes>
        {/* main view */}
        <Route path="/" element={<HomeModel />} />
        <Route path="/:id" element={<StoreModel />} {...props} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router;