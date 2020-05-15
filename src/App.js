import React from 'react';
import Home from './components/Home';
import NasaPhots from './components/NasaPhotos';

import { BrowserRouter, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhots} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
