import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Child from './child-parent-hooks/Child';
import Parent from './child-parent-hooks/Parent';
import ChildContext from './child-parent-context/ChildContext';
import ParentContext from './child-parent-context/ParentContext';
import ParentContext from './child-parent-context/ParentContext';
import Navbar from './shared/Navbar';
import { MainProvider } from './context/MainContext';
export default function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Parent />} />
            <Route path="/context" element={<ParentContext />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MainProvider>
  );
}
