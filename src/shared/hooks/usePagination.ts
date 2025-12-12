import {useCallback, useState} from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(30); // тут для більшої універсальності можна і через пропси задати початкове значення
  const [totalItems, setTotalItems] = useState(100); // теж саме

  const skip = currentPage * itemsPerPage;

  const handleCurrentPage = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  const handleTotalItems = useCallback((newTotal: number) => {
    setTotalItems(newTotal);
  }, []);

  const handleItemsPerPage = useCallback((newLimit: number) => {
    if (newLimit !== itemsPerPage) {
      setItemsPerPage(newLimit);
      setCurrentPage(0);
    }
  }, [itemsPerPage]);

  return {
    totalItems,
    currentPage,
    itemsPerPage,
    skip,
    handleTotalItems,
    handleCurrentPage,
    handleItemsPerPage
  };
};