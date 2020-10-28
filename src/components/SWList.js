import React from "react";

function SWList({ people }) {
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {people.map((p) => (
            <li key={p} className="list-group-item">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SWList;
