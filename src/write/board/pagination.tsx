import React, { useState } from 'react';
import board from '../../css/Board.module.css';
import { Link } from 'react-router-dom';

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className={board.pagination}>
          <li className={board.page_item}>
            <Link
              className={board.page_link}
              to={`/page/${currentPage - 1}`}
              aria-label="Previous"
              onClick={() => {
                if (currentPage > 1) {
                  handlePageClick(currentPage - 1);
                }
              }}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className={board.sr_only}>Previous</span>
            </Link>
          </li>

          {[1, 2, 3].map((page) => (
            <li
              key={page}
              className={`${board.page_item} ${
                currentPage === page ? board.active : ''
              }`}
            >
              <Link
                className={board.page_link}
                to={`/page/${page}`} // Navigate to the specific page
                onClick={() => handlePageClick(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className={board.page_item}>
            <Link
              className={board.page_link}
              to={`/page/${currentPage + 1}`} // Navigate to the next page
              aria-label="Next"
              onClick={() => handlePageClick(currentPage + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className={board.sr_only}>Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
