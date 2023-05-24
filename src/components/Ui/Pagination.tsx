import type { FC } from 'react';
import React from 'react';
// import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  function renderPageNumbers() {
    if (totalPages <= 7) {
      // return array of page numbers
      return Array.from(Array(totalPages), (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, 0, totalPages];
    }
    if (currentPage > totalPages - 4) {
      return [
        1,
        0,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [1, 0, currentPage - 1, currentPage, currentPage + 1, 0, totalPages];
  }

  function renderPagination() {
    return renderPageNumbers().map((page) => {
      if (page === 0) {
        return (
          <span className="mt-[2px]" key={page}>
            ...
          </span>
        );
      }
      return (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`
              ${
                currentPage === page
                  ? 'bg-blueOcare/80 text-white hover:bg-blueOcare'
                  : 'bg-transparent text-blueOcare hover:bg-blueOcare/10'
              }
              h-[30px] w-[30px] cursor-pointer rounded-full border-transparent transition
            `}
        >
          {page}
        </button>
      );
    });
  }

  function PreviousButton() {
    return (
      <button
        type="button"
        onClick={
          currentPage === 1 ? () => {} : () => onPageChange(currentPage - 1)
        }
        className={`
          ${
            currentPage === 1
              ? 'cursor-default bg-transparent text-blueOcare/40'
              : 'cursor-pointer bg-transparent text-blueOcare hover:bg-blueOcare/10 '
          }
          flex h-[30px] w-[30px] items-center justify-center rounded-full border-transparent transition
        `}
      >
        <FiChevronLeft size={18} />
      </button>
    );
  }

  function NextButton() {
    return (
      <button
        type="button"
        onClick={
          currentPage === totalPages
            ? () => {}
            : () => onPageChange(currentPage + 1)
        }
        className={`
          ${
            currentPage === totalPages
              ? 'cursor-default bg-transparent text-blueOcare/40'
              : 'cursor-pointer bg-transparent text-blueOcare hover:bg-blueOcare/10'
          }
          flex h-[30px] w-[30px] items-center justify-center rounded-full border-transparent transition
        `}
      >
        <FiChevronRight size={18} />
      </button>
    );
  }

  return (
    <div className="flex gap-1.5">
      <PreviousButton />
      {renderPagination()}
      <NextButton />
    </div>
  );
};

export default Pagination;
