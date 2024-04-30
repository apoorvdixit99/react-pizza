import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/homepage';
import AddPizza from './components/addpizza';
import EditPizza from './components/editpizza';

function App() {
  return (
    <React.Fragment>
      <h1>Pizza waale</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:id" element={<EditPizza/>} />
          <Route path="/add-pizza" element={<AddPizza/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
