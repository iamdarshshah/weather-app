const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=${encodedAddress}`;

axios
  .get(geocodeURL)
  .then((res) => {
    if (res.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find the Address.");
    }
    var lat = res.data.results[0].geometry.lat;
    var lng = res.data.results[0].geometry.lng;
    var weatherURL = `https://api.forecast.io/forecast/${process.env.API_KEY_FORECAST}/${lat},${lng}`;
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherURL);
  })
  .then((res) => {
    var temperature = res.data.currently.temperature;
    var apparentTemperature = res.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}.`
    );
  })
  .catch((e) => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    } else {
      console.log(e.message);
    }
  });
