import React from "react";

function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default PokeList;
