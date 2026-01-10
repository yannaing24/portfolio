import { createContext } from "react";

export type InitialState = {
  isInitialized: boolean;
};

export const initialState: InitialState = {
  isInitialized: false,
};

export const Context = createContext<InitialState>(initialState);
