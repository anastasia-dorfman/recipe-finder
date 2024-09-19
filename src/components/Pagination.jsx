import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

const PageButton = styled.button`
  margin: 0 0.25rem;
  padding: 0.5rem 0.75rem;
  border: none;
  background-color: ${(props) =>
    props.active ? "var(--primary-500)" : "var(--grey-200)"};
  color: ${(props) => (props.active ? "var(--white)" : "var(--grey-700)")};
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--primary-900)" : "var(--grey-300)"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Ellipsis = styled.span`
  margin: 0 0.25rem;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const showEllipsisStart = currentPage > 4;
    const showEllipsisEnd = currentPage < totalPages - 3;

    if (showEllipsisStart) {
      pageNumbers.push(1, "...");
    }

    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(totalPages - 1, currentPage + 2);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (showEllipsisEnd) {
      pageNumbers.push("...", totalPages);
    }

    return pageNumbers;
  };

  return (
    <Wrapper>
      <PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        First
      </PageButton>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PageButton>
      {getPageNumbers().map((page, index) =>
        React.createElement(page === "..." ? Ellipsis : PageButton, {
          key: index,
          onClick: page !== "..." ? () => onPageChange(page) : undefined,
          active: currentPage === page,
          children: page,
        })
      )}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
      <PageButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </PageButton>
    </Wrapper>
  );
};

export default Pagination;
