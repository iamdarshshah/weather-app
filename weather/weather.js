const dotenv = require("dotenv");
const request = require("request");

dotenv.config();

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.forecast.io/forecast/${process.env.API_KEY_FORECAST}/${lat},${lng}`,
      json: true,
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temprature,
          apparentTemperature: body.currently.apparentTemperature,
        });
      } else {
        callback("Unable to fetch weather.");
      }
    }
  );
};

module.exports.getWeather = getWeather;
