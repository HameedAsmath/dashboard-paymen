import { Card } from "antd";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { MetricCardProps } from "../../types";
import "./MetricCard.scss";

const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon,
  color,
  className = "",
}: MetricCardProps) => {
  return (
    <Card
      className={`metric-card ${
        changeType === "positive" ? "positive" : "negative"
      } ${className}`}
      data-testid={`metric-card-${title.toLowerCase().replace(" ", "-")}`}
      style={{ backgroundColor: color }}
    >
      <div className="metric-card__header">
        <span className="metric-card__title" data-testid="metric-title">
          {title}
        </span>
        {icon && (
          <div className="metric-card__icon" data-testid="metric-icon">
            {icon}
          </div>
        )}
      </div>

      <div className="metric-card__content">
        <div className="metric-card__value" data-testid="metric-value">
          {value}
        </div>

        {change && (
          <div
            className={`metric-card__change ${changeType}`}
            data-testid="metric-change"
          >
            {changeType === "positive" ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}
            <span>{change}</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;
