import axios from "axios";
import { useState } from "react";
import { City } from "./components/City";

function App() {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const key = process.env.REACT_APP_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=tr&appid=${key}&units=metric`
      );
      console.log(response);
      setCity(response.data);
    } catch (error) {
      console.log(error);
    }
    setSearch("");
  };

  return (
    <div className="weather-app container">
      <form className="search" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Şehir giriniz..."
          value={search}
          autoFocus
        />
        <button type="submit">Ara</button>
      </form>
      <City city={city} />
    </div>
  );
}

export default App;
