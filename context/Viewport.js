import * as React from "react";
import { BREAKPOINTS } from "../constants/breakpoints";

export const ViewportContext = React.createContext();

const defineWindowWidth = () =>
  (typeof window !== undefined && window?.innerWidth) || 0;

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(0);

  const handleWindowResize = () => {
    setWidth(defineWindowWidth());
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    handleWindowResize();
  }, []);

  const value = {
    mobile: width < BREAKPOINTS.mobile,
    tablet: BREAKPOINTS.mobole <= width && width < BREAKPOINTS.tablet,
    desktop: BREAKPOINTS.tablet <= width,
  };

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
};
