import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import type { ChartDataPoint } from "../../types";
import "./Charts.scss";

interface ProjectionsChartProps {
  data: ChartDataPoint[];
}

const ProjectionsChart = ({ data }: ProjectionsChartProps) => {
  return (
    <div className="chart-container" data-testid="projections-chart">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 45, bottom: 20 }}
          barCategoryGap="30%"
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="var(--border-color)"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "var(--border-color)", strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "var(--text-tertiary)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "var(--text-tertiary)" }}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              color: "var(--text-primary)",
            }}
          />
          <Bar
            dataKey="projections"
            stackId="a"
            fill="#A8C5DA"
            radius={[0, 0, 0, 0]}
            maxBarSize={40}
            name="Projections"
          />
          <Bar
            dataKey="actuals"
            stackId="a"
            fill="#CFDFEB"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
            name="Actuals"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsChart;
