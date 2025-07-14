const getCountryCode =()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showCountryCode, showError);
    } else {
      document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showCountryCode(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = 'YOUR_IPINFO_API_KEY'; // Replace with your ipinfo.io API key

    fetch(`https://ipinfo.io?token=${b5838ec89a7c4a}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("location").innerHTML =
          "Country Code: " + data.country;
      })
      .catch(error => {
        document.getElementById("location").innerHTML = "Error fetching country code.";
      });
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById("location").innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.getElementById("location").innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("location").innerHTML = "An unknown error occurred.";
        break;
    }
  }

  export default getCountryCode;