import { useContext } from "react";
import { Context } from "./context";

export const useHook = () => useContext(Context);
