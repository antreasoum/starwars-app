import React, { useState, useEffect } from "react";
import SWList from "./components/SWList";
import Pagination from "./components/Pagination";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [selected, setSelected] = useState(false);
  const [people, setPeople] = useState([]);
  console.log(people);

  //State of page (change pages)
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://swapi.dev/api/people"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  //useEffect so it can be rendered once
  useEffect(() => {
    //Cancel a fetch and renew
    let cancel;
    //CurrentPageUrl = fetch URL
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPeople(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPageUrl]);

  //Next Page & Previous Page (Pagination)
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    //Empty tags: An empty fragment so we can render both JS
    <div className="App-header">
      <ToggleButton
        selected={selected}
        toggleSelected={() => {
          setSelected(!selected);
        }}
      />
      <div className="container">
        <SWList people={people} />
        <Pagination
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />

        <h4 style={{ fontSize: "14px", marginTop: "5px" }}>
          Different form of{" "}
          <a href="https://www.youtube.com/watch?v=o3ZUc7zH8BE">
            Pokemon App
          </a>{" "}
          by{" "}
          <a href="https://github.com/WebDevSimplified">
            WebDevSimplified
          </a>
        </h4>
      </div>
    </div>
  );
}

export default App;
