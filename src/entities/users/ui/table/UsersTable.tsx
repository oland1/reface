import {TablePagination, Typography} from "@mui/material";
import {TableMUI} from "src/shared/ui";
import {useUsers} from "../../model/UsersContext.ts";
import {UsersRows} from "./UsersRows.tsx";


// Я не докінця розумію чи треба було реалізувати пошук і фільтрацію в цій задачі, тому що в ТЗ цього не було.
// Але якщо треба, то я б реалізувала це на рівні бекенду, додаючи відповідні параметри до API запитів.
// 'https://dummyjson.com/users/search?q=' та 'https://dummyjson.com/users/filter?key=&value='


export const UsersTable = () => {
  const {tableUsers, isTableLoading, isTableError, pagination, totalItems} = useUsers();

  const {itemsPerPage, currentPage, handleCurrentPage} = pagination;

  const header = ["ID", "Name", "Email", "Role", "Рік народження", "Вага", "Зріст"];

  const resolvedRows = tableUsers?.map((row) => <UsersRows key={row.id} row={row}/>);

  const paginationComponent = (
    <TablePagination
      rowsPerPageOptions={[]}
      component="div"
      count={totalItems}
      rowsPerPage={itemsPerPage}
      page={currentPage}
      onPageChange={(_, newPage) => handleCurrentPage(newPage)}
    />
  );

  if (isTableLoading) {
    return (
      <div className="flex justify-center items-center p-12 bg-gray-50 rounded-xl min-h-[400px]">
        <Typography variant="caption" className="text-xl font-medium text-gray-500">Завантаження таблиці...</Typography>
      </div>
    );
  }

  if (isTableError) {
    return <Typography variant="h4" className="text-red-600 p-6">Сталася помилка при завантаженні даних.</Typography>;
  }

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <Typography variant="h5" className="text-xl font-semibold mb-6 text-gray-800">
        📝Таблиця користувачів
      </Typography>

      <TableMUI
        header={header}
        rows={resolvedRows}
        pagination={paginationComponent}
      />
    </div>
  )
}