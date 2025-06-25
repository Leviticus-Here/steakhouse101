// src/utils/geoLocation.js
export const getUserLocation = (callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          callback(position.coords);
        },
        error => console.warn("Location error:", error)
      );
    } else {
      console.warn("Geolocation not supported");
    }
  };
  