const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
  origin: "http://localhost:8000",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/weather", async (req, res) => {
  await axios
    .get(
      `https://api.meteo.lt/v1/places/${req.body.location}/forecasts/long-term`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((result) => {
      res.json({
        weather_data: result.data,
        success: true,
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
