import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Users from "./pages/Users";
import UserInfo from "./pages/UserInfo";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users/>} />
            <Route path="/:id" element={<UserInfo/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
