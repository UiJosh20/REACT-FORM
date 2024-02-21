import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tenary from './Components/Assignment';
import Signik from './Components/Signik';
import Dashboard from './Components/Dashboard';
import FileUpload from './Components/FileUpload';
import Conter from './Components/Conter';
import New from './Components/New';
import axios from 'axios';

function App() {
  // let token = localStorage.getItem('token')

  return (
    <>
      <Routes>
        <Route path="/" element={<Tenary />} />
        <Route path="/signup" element={<Signik />} />
        {/* <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/" />}
        /> */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/counter" element={<Conter />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
