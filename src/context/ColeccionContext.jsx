
import React, { createContext, useContext, useState } from "react";

const ColeccionContext = createContext();

export const useColeccion = () => useContext(ColeccionContext);

export const ColeccionProvider = ({ children }) => {
  const [coleccion, setColeccion] = useState([]);

  const agregarPersonaje = (personaje) => {
    setColeccion((prevColeccion) => [...prevColeccion, personaje]);
  };

  const value = {
    coleccion,
    agregarPersonaje,
  };

  return (
    <ColeccionContext.Provider value={value}>
      {children}
    </ColeccionContext.Provider>
  );
};
