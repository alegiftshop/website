import { useState, useEffect } from "react";

const useResponsiveWidth = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < breakpoint );
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]); 

  return isSmall;
};

export default useResponsiveWidth;

