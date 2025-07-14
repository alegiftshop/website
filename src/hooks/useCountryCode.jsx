import { useState, useEffect } from "react";
import axios from "axios";

const useCountryCode = () => {
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const apiKey = "b5838ec89a7c4a" || process.env.IPINFO_API_KEY;
            const response = await axios.get(
              `https://ipinfo.io?token=${apiKey}`
            );
            setCountryCode(response.data.country);
          }, handleError);
        } else {
          setError("Geolocation is not supported by this browser.");
        }
      } catch (error) {
        setError("Error fetching country code.");
      }
    };

    fetchCountryCode();
  }, []);

  const handleError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.");
        break;
      default:
        setError("An error occurred.");
        break;
    }
  };

  return <div>{error ? <div>N/A</div> : <div>{countryCode}</div>}</div>;
};

export default useCountryCode;