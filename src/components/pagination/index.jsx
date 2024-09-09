import rightArrow from './img/arrowRight.png';
import leftArrow from '../../pages/book-page/img/longArrowB.png';
import "./index.scss";

const getVisiblePages = (page, total) => {
  if (total < 7) {
    return new Array(total).fill(null).map((_, i) => ++i);
  } else {
    if (page > 4 && page + 2 < total) {
      return [1, page - 1, page, page + 1, total];
    } else if (page > 4 && page + 2 >= total) {
      return [1, total - 3, total - 2, total - 1, total];
    } else {
      return [1, 2, 3, 4, 5, total];
    }
  }
};

export const Pagination = ({ count, page, handleChangePage }) => {
  const pageCount = Math.ceil(count / 9) || 1;
  const visiblePages = getVisiblePages(page, pageCount);

  return (
    <div className="pagination">
      <div className="pagination__arrows" onClick={() => handleChangePage(page - 1)}>
        <img src={leftArrow} />
        <p>Prev</p>
      </div>
      <div className="pagination__nums">
        {visiblePages.map((pageNumber, index, array) => {
          return (
            <span key={pageNumber}>
              {array[index - 1] + 2 < pageNumber ? (
                <span className="pagination__dots">...</span>
              ) : null}
              <button
                type="button"
                className={`pagination__item ${page === pageNumber ? "pagination__item_active" : ""
                  }`}
                onClick={() => handleChangePage(pageNumber)}
              >
                {pageNumber}
              </button>
            </span>
          );
        })}
      </div>
      <div className="pagination__arrows" onClick={() => handleChangePage(page + 1)}>
        <p>Next</p>
        <img src={rightArrow} />
      </div>
    </div>
  );
};