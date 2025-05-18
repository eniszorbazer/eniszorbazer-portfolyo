import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import AllRoutes from "./router/AllRoutes";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <ThemeProvider>
        <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color="255, 160, 1"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.2}
        />
        <ScrollToTop />
        <AllRoutes />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
