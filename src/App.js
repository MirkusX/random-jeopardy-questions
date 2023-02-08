import axios from "axios";
import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import { useEffect, useState } from "react";
import { DataContext, UpdateContext } from "./Components/useContext";

function App() {
  //state for getting new question
  const [update, setUpdate] = useState(false);
  //state for api data
  const [data, setData] = useState();
  //state for errors
  const [error, setError] = useState();
  //function for api call
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
  //useeffect for running getData function
  useEffect(() => {
    getData();
  }, [update]);
  if (data) {
    return (
      <UpdateContext.Provider value={{ update, setUpdate }}>
        <DataContext.Provider value={{ data, setData }}>
          <div className="App">
            <Frontpage />
          </div>
        </DataContext.Provider>
      </UpdateContext.Provider>
    );
  }
}

export default App;
