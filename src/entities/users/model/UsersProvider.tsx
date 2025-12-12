import * as React from "react";
import {useEffect} from "react";

import {usePagination} from "@/shared/hooks/usePagination.ts";
import {useFetchData} from "@/shared/hooks/useFetchData.ts";
import type {UsePaginationReturn, UserAPIResponse} from "../types.ts";
import {UsersContext} from "./UsersContext.ts";

const USERS_API_URL = 'https://dummyjson.com/users';

type FetchData = { data: UserAPIResponse | null, isLoading: boolean, isError: unknown }

// Тут важливо наголисти що архітектурно взагалі не правильно отримувати весь список юзерів і формувати статистику на клієнті.
// Статистику має надавати бекенд окремим запитом. Але оскільки тестове не передбачає окремого методу, то як варіант реалізації:

const useTableData = (pagination: UsePaginationReturn) => {
  const {itemsPerPage, skip} = pagination;
  const url = `${USERS_API_URL}?limit=${itemsPerPage}&skip=${skip}`;
  return useFetchData(url) as FetchData;
};

const useStatisticData = () => {
  const url = `${USERS_API_URL}?limit=0`;
  return useFetchData(url) as FetchData;
};


export const UsersProvider = ({children}: { children: React.ReactNode }) => {
  const pagination = usePagination();
  const {itemsPerPage, handleItemsPerPage, handleTotalItems, totalItems} = pagination;

  const {data: tableData, isLoading: isTableLoading, isError: isTableError} = useTableData(pagination);
  const {data: statisticData, isLoading: isStatisticLoading, isError: isStatisticError} = useStatisticData();

  useEffect(() => {
    if (statisticData?.total !== undefined) {
      handleTotalItems(statisticData.total);
    }

    if (tableData?.limit !== undefined && tableData.limit !== itemsPerPage) {
      handleItemsPerPage(tableData.limit);
    }
  }, [statisticData, tableData, itemsPerPage, handleTotalItems, handleItemsPerPage]);

  const value = {
    tableUsers: tableData?.users,
    isTableLoading,
    isTableError,
    statisticUsers: statisticData?.users,
    isStatisticLoading,
    isStatisticError,
    pagination,
    totalItems: totalItems,
  };

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
};