import React, { createContext, useContext, useState } from 'react';

const CarContext = createContext();

export function CarProvider({ children }) {
  const [red, setRed] = useState(false),
    [blue, setBlue] = useState(false),
    [yellow, setYellow] = useState(false);

  const cars = {
    red: {
      color: red,
      setCar: setRed,
    },
    blue: {
      color: blue,
      setCar: setBlue,
    },
    yellow: {
      color: yellow,
      setCar: setYellow,
    },
  };

  return <CarContext.Provider value={cars}>{children}</CarContext.Provider>;
}

export function useCars() {
  const context = useContext(CarContext);
  return { ...context }
  }
