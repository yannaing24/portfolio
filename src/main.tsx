import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Consumer, Provider } from "@/initializer";
import { SplashScreen } from "./components/splash-screen";
import App from "@/App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Consumer>
        {/* {({ isInitialized }) => {
          if (!isInitialized) {
            return <SplashScreen />;
          }
          return <App />;
        }} */}
        {({ isInitialized }) => (
          <>
            <SplashScreen visible={!isInitialized} />
            {isInitialized && <App />}
          </>
        )}
      </Consumer>
    </Provider>
  </StrictMode>
);
