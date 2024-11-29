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
      `${URL}data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`
    );

    // Convert UTC time to the local time

    const localCurrentTime = new Intl.DateTimeFormat("en-US", {
      timeZone: cityResponse.data.timezone,
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    });

    // Convert data to title case

    const toTitleCase = (string) => {
      return string
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };
    console.log(cityResponse.data.daily);

    res.render("index.ejs", {
      data: cityResponse.data,
      icon: cityResponse.data.current.weather[0].icon,
      tempMetric: Math.round(cityResponse.data.current.temp),
      humidity: cityResponse.data.current.humidity,
      windMetric: (cityResponse.data.current.wind_speed * 3.6).toFixed(1),
      city: toTitleCase(city),
      description: toTitleCase(
        cityResponse.data.current.weather[0].description
      ),
      time: localCurrentTime.format(),
      feelsLike: Math.round(cityResponse.data.current.feels_like),
      visibility: Math.round(cityResponse.data.current.visibility) / 1000,
      precipitation: Math.round(cityResponse.data.hourly[0].pop * 10),
      devPoint: Math.round(cityResponse.data.current.dew_point),
    });
  } catch (error) {
    const err = "Location you entered does not exist. Please try again! ";
    res.render("index.ejs", {error: err})

  }
});
// const apiKey = process.env.API_KEY;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
