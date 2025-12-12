// import можуть бути зменшені якщо додано індексні файли в папках
import {UsersTable} from "../entities/users/ui/table/UsersTable.tsx";
import {UsersStatistic} from "../entities/users/ui/statistic/UsersStatistic.tsx";
import {UsersChart} from "../entities/users/ui/chart/UsersChart.tsx";
import {UsersProvider} from "../entities/users/model/UsersProvider.tsx";


export const Dashboard = () => {
  return (
    <UsersProvider>
      <UsersStatistic/>
      <UsersChart/>
      <UsersTable/>
    </UsersProvider>
  )
}