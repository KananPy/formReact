import React, { createContext, useContext, useState } from "react";

const CardDataContext = createContext();

export function useCardDataContext() {
  return useContext(CardDataContext);
}

export function CardDataProvider({ children }) {
  const [cardData, setCardData] = useState([]);

  const addCardData = (data) => {
    setCardData((prevCardData) => [...prevCardData, data]);
  };

  const removeCardData = (index) => {
    setCardData((prevCardData) => prevCardData.filter((_, i) => i !== index));
  };

  return (
    <CardDataContext.Provider value={{ cardData, addCardData, removeCardData }}>
      {children}
    </CardDataContext.Provider>
  );
}
