import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import Pagination from "./Pagination";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  //State of page (change pages)
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  //Loading Screen
  const [loading, setLoading] = useState(true);

  //useEffect so it can be rendered once
  useEffect(() => {
    setLoading(true);
    //Cancel a fetch and renew
    let cancel;
    //CurrentPageUrl = fetch URL
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
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

  //If Loading takes time
  if (loading) return "Loading...";

  return (
    //Empty tags: An empty fragment so we can render both JS
    <>
      <PokeList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </>
  );
}

export default App;
