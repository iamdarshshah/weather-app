const request = require("request");
const dotenv = require("dotenv");
dotenv.config();
request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=1301%20lombard%20street%20philadelphia`,
    json: true,
  },
  (error, response, body) => {
    console.log(body);
  }
);
