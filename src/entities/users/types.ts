export type User = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  birthDate: string,
  weight: number,
  height: number,
};
export type UserAPIResponse = {
  total: number,
  skip: number,
  limit: number,
  users: User[] | null,
};

export type UsePaginationReturn = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  skip: number;
  handleCurrentPage: (newPage: number) => void;
  handleItemsPerPage: (newLimit: number) => void;
  handleTotalItems: (total: number) => void;
};
