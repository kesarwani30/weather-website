const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=720020b512f061710e7c75586d833027&query=" +
    latitude +
    "," +
    longitude +
    "&unit=m#";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect Weather Services!", undefined);
    } else if (body.error) {
      callback("Unable to find the location!!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          " It is currently: " +
          body.current.temperature +
          " degrees out.There is a " +
          body.current.precip +
          "% chance of rain"
      );
    }
  });
};

module.exports = forecast;
