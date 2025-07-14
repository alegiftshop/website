import { useState, useEffect } from "react";
import { isDesktop } from "react-device-detect";

const useIsDesktop = () => {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    setDesktop(isDesktop);
  }, []);

  return desktop;
};

export default useIsDesktop;