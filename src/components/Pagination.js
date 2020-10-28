import React from "react";

function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className="buttons">
      {goToPrevPage && (
        <button
          id="prevbtn"
          className="btn btn-primary btn-block"
          onClick={goToPrevPage}
        >
          Previous
        </button>
      )}
      {goToNextPage && (
        <button
          id="nextbtn"
          className="btn btn-primary btn-block"
          onClick={goToNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
