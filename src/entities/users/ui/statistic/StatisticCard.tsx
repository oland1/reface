import {Typography} from "@mui/material";

type Props = {
  title: string;
  value: string | number;
  unit: string;
}
export const StatisticCard = ({title, value, unit}: Props) => (
  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 transition duration-150 hover:bg-gray-100">
    <Typography
      color="textSecondary"
      className="text-sm font-medium text-gray-500 truncate"
    >
      {title}
    </Typography>

    <div className="mt-1 flex items-baseline">
      <Typography variant="h6" className="text-xl font-bold text-indigo-600">
        {value}
      </Typography>
      <span className="ml-1 text-sm font-medium text-gray-500">{unit}</span>
    </div>
  </div>
);