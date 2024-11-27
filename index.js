import express from "express";
import axios from "axios";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/add", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const URL = "http://api.openweathermap.org/";
  const { city } = req.body;

  try {
    const coordinatesResponse = await axios.get(
      `${URL}geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    const data = coordinatesResponse.data;
    const lat = data[0].lat;
    const lon = data[0].lon;

    const cityResponse = await axios.get(
      `${URL}data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}`
    );
    console.log(cityResponse.data);
  } catch (error) {
    console.log(error);
  }
});
// const apiKey = process.env.API_KEY;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
