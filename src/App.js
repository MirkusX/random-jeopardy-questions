import axios from "axios";
import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import { useEffect, useState } from "react";
import { DataContext } from "./Components/useContext";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const getData = () => {
    axios
      .get("https://jservice.io/api/random")
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        setError(response);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (data) {
    return (
      <DataContext.Provider value={{ data, setData }}>
        <div className="App">
          <Frontpage />
        </div>
      </DataContext.Provider>
    );
  }
}

export default App;
