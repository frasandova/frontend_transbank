import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/home/home';
import { TestPage } from '../pages/testpage';
import { TransbankResponse } from '../pages/transbank/TransbankResponse';

export const AppRouter = () => {
  return (
    <div className="App">
    {/* <h1>Welcome to React Router!</h1> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testpage" element={<TestPage />} />
      <Route path="/transbank-response" element={<TransbankResponse />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </div>
  )
}
