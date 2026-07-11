import "./Pagination.css";

function Pagination({ activePage, setActivePage, totalPages }) {
  function nextPage() {
    setActivePage(activePage + 1);
  }
  function previousPage() {
    setActivePage(activePage - 1);
  }

  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        {activePage > 1 && (
          <button className="cta secondary-cta" onClick={previousPage}>
            Prev
          </button>
        )}
        <div className="pagination-numbers-container">
          <div className="pagination-number active-pagination">
            {activePage}
          </div>
          {activePage + 1 <= totalPages && (
            <div
              className="pagination-number"
              onClick={() => {
                setActivePage(activePage + 1);
              }}
            >
              {activePage + 1}
            </div>
          )}
          {activePage + 2 <= totalPages && (
            <div
              className="pagination-number"
              onClick={() => {
                setActivePage(activePage + 2);
              }}
            >
              {activePage + 2}
            </div>
          )}
        </div>
        {activePage < totalPages && (
          <button className="cta primary-cta" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
      <span className="total-pages-count">
        Total: <span>{totalPages}</span> pages
      </span>
    </div>
  );
}

export default Pagination;
