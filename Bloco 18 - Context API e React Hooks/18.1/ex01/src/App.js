import React from 'react';
import { CarProvider } from './hooks/contexts/car';
import Cars from './components/Cars';
import './App.css';

function App() {
  return (
    <CarProvider>
      <Cars />
    </CarProvider>
  );
}

export default App;
