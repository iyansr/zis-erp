import { useState } from 'react';

const useTableState = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  return {
    columnFilters,
    setColumnFilters,
    pageIndex,
    pageSize,
    setPagination,
  };
};

export default useTableState;
