import {createContext, useContext} from "react";
import type {UsePaginationReturn, User} from "../types.ts";

export type UsersContextValue = {
  tableUsers: User[] | null | undefined;
  isTableLoading: boolean;
  isTableError: unknown;
  statisticUsers: User[] | null | undefined;
  isStatisticLoading: boolean;
  isStatisticError: unknown;
  pagination: UsePaginationReturn;
  totalItems: number;
};

export const UsersContext = createContext<UsersContextValue | null>(null);

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (context === null) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
};