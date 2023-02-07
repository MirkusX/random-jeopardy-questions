import logo from "./logo.svg";
import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const getData = () => {
    axios
      .get(
        "git remote add origin https://github.com/MirkusX/random-jeopardy-questions.git"
      )
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
      <div className="App">
        <Frontpage />
      </div>
    );
  }
}

export default App;
