import { createContext, useContext, useState } from "react";

// 1️⃣ Context Create Karo
const LightsContext = createContext();

// 2️⃣ Context Provider Function
export const LightsProvider = ({ children }) => {
  const [lightsOn, setLightsOn] = useState(false); // Initial State

  return (
    <LightsContext.Provider value={{ lightsOn, setLightsOn }}>
      {children}
    </LightsContext.Provider>
  );
};

// 3️⃣ Custom Hook for Easy Access
export const useLights = () => useContext(LightsContext);
