import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { ChartDataPoint } from "../../types";
import "./Charts.scss";

interface RevenueChartProps {
  data: ChartDataPoint[];
  currentWeek: string;
  previousWeek: string;
}

const RevenueChart = ({
  data,
  currentWeek,
  previousWeek,
}: RevenueChartProps) => {
  return (
    <div className="chart-container revenue-chart" data-testid="revenue-chart">
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-dot current"></div>
          <span>Current Week {currentWeek}</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot previous"></div>
          <span>Previous Week {previousWeek}</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "var(--text-tertiary)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "var(--text-tertiary)" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              color: "var(--text-primary)",
            }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="var(--dark-blue)"
            strokeWidth={3}
            dot={{ fill: "var(--dark-blue)", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: "var(--dark-blue)" }}
            name="Current Week"
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#9CA3AF"
            strokeWidth={2}
            dot={{ fill: "#9CA3AF", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: "#9CA3AF" }}
            strokeDasharray="5 5"
            name="Previous Week"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
