// import можуть бути зменшені якщо додано індексні файли в папках
import {UsersTable} from "../entities/users/ui/table/UsersTable.tsx";
import {UsersStatistic} from "../entities/users/ui/statistic/UsersStatistic.tsx";
import {UsersChart} from "../entities/users/ui/chart/UsersChart.tsx";
import {UsersProvider} from "../entities/users/model/UsersProvider.tsx";


export const Dashboard = () => {
  return (
    <UsersProvider>
      <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
        <UsersStatistic/>
        <UsersChart/>
        <UsersTable/>
      </div>
    </UsersProvider>
  )
}