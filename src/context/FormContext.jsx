// src/context/FormContext.js
import React, { createContext, useState, useContext } from "react";

// Create a Context for the form data
const FormContext = createContext();

// Custom hook to use the FormContext
export const useFormContext = () => useContext(FormContext);

// FormContext provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
