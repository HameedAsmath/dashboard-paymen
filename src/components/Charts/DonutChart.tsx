import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState, useEffect } from "react";
import "./Charts.scss";

interface DonutChartProps {
  data: Array<{
    name: string;
    value: number;
    amount: number;
  }>;
}

const DonutChart = ({ data }: DonutChartProps) => {
  const COLORS = ["#1F2937", "#A5B4FC", "#10B981", "#F59E0B"];

  // Responsive chart sizing
  const [chartDimensions, setChartDimensions] = useState({
    width: 200,
    height: 200,
    isMobile: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth <= 768;
      const baseSize = isMobile ? 160 : 200;
      setChartDimensions({
        width: baseSize,
        height: baseSize,
        isMobile,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const centerPercentage = Math.round((data[0]?.value || 0) * 10) / 10;

  // Calculate dynamic corner radius based on chart size and smallest slice
  const minSliceValue = Math.min(...data.map((item) => item.value));
  const maxSliceValue = Math.max(...data.map((item) => item.value));

  // Enhanced proportional corner radius calculation
  const baseCornerRadius = chartDimensions.isMobile ? 3 : 4;
  const dynamicCornerRadius = Math.max(
    chartDimensions.isMobile ? 1.5 : 2, // Minimum radius
    Math.min(
      chartDimensions.isMobile ? 6 : 8, // Maximum radius
      baseCornerRadius * (minSliceValue / maxSliceValue) +
        baseCornerRadius * 0.5
    )
  );

  // Dynamic padding angle based on data and screen size
  const basePadding = chartDimensions.isMobile ? 1 : 2;
  const dynamicPaddingAngle = data.length > 4 ? basePadding * 0.5 : basePadding;

  return (
    <div className="donut-chart-container" data-testid="donut-chart">
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={chartDimensions.height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="90%"
              startAngle={90}
              endAngle={450}
              dataKey="value"
              paddingAngle={dynamicPaddingAngle}
              cornerRadius={dynamicCornerRadius}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                color: "var(--text-primary)",
                fontSize: chartDimensions.isMobile ? "12px" : "13px",
                padding: chartDimensions.isMobile ? "8px" : "10px",
              }}
              formatter={(value: number, name: string) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="chart-center-text">
          <div className="center-percentage">{centerPercentage}%</div>
        </div>
      </div>

      <div className="chart-legend-vertical">
        {data.map((item, index) => (
          <div key={item.name} className="legend-item-vertical">
            <div
              className="legend-dot-large"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <div className="legend-content">
              <span className="legend-name">{item.name}</span>
              <span className="legend-amount">${item.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
