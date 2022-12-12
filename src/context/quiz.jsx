import { createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = { name: "Alberto" };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
