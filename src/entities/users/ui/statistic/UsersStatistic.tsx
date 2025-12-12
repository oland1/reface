import {Typography} from "@mui/material";
import {useUserStatistic} from "../../model/useUserStatistic.ts";
import {useUsers} from "../../model/UsersContext.ts";
import {StatisticCard} from "@/entities/users/ui/statistic/StatisticCard.tsx";

export const UsersStatistic = () => {
  const {statisticUsers, isStatisticError, isStatisticLoading, totalItems} = useUsers();

  const resolvedData = statisticUsers ? statisticUsers : [];
  const stats = useUserStatistic(resolvedData);
  const {medianAge, avgAge, avgWeight, avgHeight} = stats;

  if (isStatisticLoading) {
    return <Typography variant="caption" className="text-gray-500">Завантаження статистики...</Typography>;
  }
  if (isStatisticError) {
    return <Typography variant="h6" className="text-red-600">Сталася помилка при завантаженні статистики.</Typography>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl mb-8 border border-gray-200">
      <Typography variant="h5" className="text-xl font-semibold mb-6 text-gray-800">
        📊Cтатистика користувачів
      </Typography>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        <StatisticCard title="Всього користувачів" value={totalItems} unit=""/>
        <StatisticCard title="Медіана віку" value={medianAge} unit="років"/>
        <StatisticCard title="Середня вага" value={avgWeight} unit="кг"/>
        <StatisticCard title="Середній зріст" value={avgHeight} unit="см"/>
        <StatisticCard title="Середній вік" value={avgAge} unit="років"/>
      </div>
    </div>
  );
}

