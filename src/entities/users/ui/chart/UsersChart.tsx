import {Typography} from "@mui/material";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useUserChart} from "../../model/useUserChart.ts";
import {useUsers} from "../../model/UsersContext.ts";

const CHART_HEIGHT = 300;

export const UsersChart = () => {
  const {statisticUsers, isStatisticLoading, isStatisticError} = useUsers();

  const resolvedData = statisticUsers ? statisticUsers : [];
  const chartData = useUserChart(resolvedData);

  if (isStatisticLoading) {
    return <Typography variant="caption" className="text-gray-500">Завантаження графіку...</Typography>;
  }

  if (isStatisticError) {
    return <Typography variant="h6" className="text-red-600">Помилка завантаження даних для графіку.</Typography>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl mb-8 border border-gray-200">
      <Typography variant="h5" className="text-xl font-semibold mb-6 text-gray-800">
        📈Лінійний графік
      </Typography>

      <div style={{height: CHART_HEIGHT}} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{top: 15, right: 30, left: 30, bottom: 40}}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>

            <XAxis
              dataKey="year"
              label={{value: 'Рік народження', position: 'bottom', fill: '#4b5563', dy: 15,}}
              type="number"
              domain={['dataMin', 'dataMax']}
              allowDecimals={false}
              stroke="#4b5563"
            />

            <YAxis
              dataKey="count"
              label={{
                value: 'Кількість користувачів', position: 'left', fill: '#4b5563', angle: -90, dx: -10, dy: -40,
              }}
              allowDecimals={false}
              stroke="#4b5563"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
              formatter={(value) => [`${value} осіб`, 'Кількість']}
              labelFormatter={(label) => `Рік: ${label}`}
            />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{stroke: '#4f46e5', strokeWidth: 2, r: 3}}
              activeDot={{r: 6, fill: '#4f46e5', stroke: '#fff', strokeWidth: 2}}
              name="Кількість"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};