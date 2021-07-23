const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoia2VzYXJ3YW5pMzAiLCJhIjoiY2tyYnBtcmoyMThwdDJ6cDhpMnY0NWNqYiJ9.yf5kmIz0vZV21trVZ_CgUw&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to GeoCode services", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find Location!", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
