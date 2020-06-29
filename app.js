const request = require("request");
const dotenv = require("dotenv");
const yargs = require("yargs");
dotenv.config();

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

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=${encodedAddress}`,
    json: true,
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Address: ${body.results[0].geometry.location.lat}`);
    console.log(`Address: ${body.results[0].geometry.location.lng}`);
  }
);
