import { useState, useEffect } from "react";

const useResponsiveColumns = (
  breakpoints = { sm: 480, md: 768, lg: 1024, xl: 1280 },
  onlyEvenColumns = false // New parameter
) => {
  const [columns, setColumns] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let calculatedColumns;

      if (width < breakpoints.sm) {
        calculatedColumns = 2;
      } else if (width < breakpoints.md) {
        calculatedColumns = 3;
      } else if (width < breakpoints.lg) {
        calculatedColumns = 4;
      } else if (width < breakpoints.xl) {
        calculatedColumns = 5;
      } else {
        calculatedColumns = 6;
      }


      if (onlyEvenColumns && calculatedColumns % 2 !== 0) {
        calculatedColumns += 1; 
      }

      setColumns(calculatedColumns);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints, onlyEvenColumns]);

  return columns;
};

export default useResponsiveColumns;