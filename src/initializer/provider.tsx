import { useReducer, useEffect } from "react";
import { type InitialState, initialState, Context } from "./context";
import { SPLASH_SCREEN_TIME_IN_MS } from "@/utils/const";

type ProviderProps = {
  children: React.ReactNode;
};

type Action = {
  type: "INITIALIZE";
  payload: InitialState;
};

const handlers = {
  INITIALIZE: (state: InitialState, action: Action) => {
    const { isInitialized } = action.payload;
    return {
      ...state,
      isInitialized,
    };
  },
};

const reducer = (state: InitialState, action: Action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = async () => {
    setTimeout(() => {
      dispatch({
        type: "INITIALIZE",
        payload: {
          isInitialized: true,
        },
      });
    }, SPLASH_SCREEN_TIME_IN_MS);
  };

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
