import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Parent from './child-parent-hooks/Parent';
import ChildReducer from './child-Reducer/ChildReducer';
import ParentContext from './child-parent-context/ParentContext';
import Navbar from './shared/Navbar';
import { SimpleProvider } from './context/simpleContext/SimpleContext';
import { SecondProvider } from './context/contextReducer/SecondContext';
import Counter from './countdown/Counter';
import Random from './random/Random';
export default function App() {
  return (
    <SimpleProvider>
      <SecondProvider >
        <BrowserRouter>
          <div className="container-fluid">
            <Navbar />
            <Routes>
              <Route path="/" element={<Parent />} />
              <Route path="/context" element={<ParentContext />} />
              <Route path="/reducer" element={<ChildReducer />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/random" element={<Random />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SecondProvider>
    </SimpleProvider >
  );
}
