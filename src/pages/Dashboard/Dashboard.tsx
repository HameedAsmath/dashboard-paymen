import { Row, Col, Card, Typography } from "antd";
import MetricCard from "../../components/Cards/MetricCard";
import ProjectionsChart from "../../components/Charts/ProjectionsChart";
import RevenueChart from "../../components/Charts/RevenueChart";
import DonutChart from "../../components/Charts/DonutChart";
import {
  metricsData,
  projectionsVsActualsData,
  revenueData,
  totalSalesData,
  topSellingProducts,
  revenueByLocationData,
} from "../../data/mockData";
import "./Dashboard.scss";

const { Title } = Typography;

const Dashboard = () => {
  const locationData = revenueByLocationData.map((item) => {
    const maxValue = Math.max(...revenueByLocationData.map((d) => d.value));
    const percentage = (item.value / maxValue) * 100;
    return {
      location: item.location,
      value: `${(item.value / 1000).toFixed(0)}K`,
      percentage: percentage,
    };
  });

  return (
    <div className="dashboard-page" data-testid="dashboard-page">
      <div className="dashboard-header">
        <Title level={2} className="page-title">
          eCommerce
        </Title>
      </div>

      <div className="dashboard-content">
        {/* Main Content Area */}
        <div className="main-content">
          {/* Row 1: KPI Cards + Bar Chart */}
          <Row gutter={[24, 24]} className="dashboard-row row-1">
            <Col span={12} className="kpi-section">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <MetricCard
                    {...metricsData.customers}
                    className="active-card"
                  />
                </Col>
                <Col span={12}>
                  <MetricCard {...metricsData.orders} />
                </Col>
                <Col span={12}>
                  <MetricCard {...metricsData.revenue} />
                </Col>
                <Col span={12}>
                  <MetricCard
                    {...metricsData.growth}
                    className="passive-card"
                  />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Card
                title="Projections vs Actuals"
                className="chart-card projections-card"
                data-testid="projections-card"
              >
                <ProjectionsChart data={projectionsVsActualsData} />
              </Card>
            </Col>
          </Row>

          {/* Row 2: Line Chart (75%) + Revenue by Location (25%) */}
          <Row gutter={[24, 24]} className="dashboard-row row-2">
            <Col span={18}>
              <Card
                title="Revenue"
                className="chart-card revenue-card"
                data-testid="revenue-card"
              >
                <RevenueChart
                  data={revenueData}
                  currentWeek="$58,211"
                  previousWeek="$68,768"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Revenue by Location"
                className="location-card"
                data-testid="location-card"
              >
                <div className="location-content">
                  <div className="world-map-container">
                    <img
                      src="/src/assets/worldmap.png"
                      alt="World Map"
                      className="world-map-image"
                    />
                  </div>
                  <div className="location-list">
                    {locationData.map((item) => (
                      <div key={item.location} className="location-item">
                        <div className="location-header">
                          <span className="location-name">{item.location}</span>
                          <span className="location-value">{item.value}</span>
                        </div>
                        <div className="location-progress">
                          <div
                            className="progress-bar"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Row 3: Top Selling Products (75%) + Total Sales Pie Chart (25%) */}
          <Row gutter={[24, 24]} className="dashboard-row row-3">
            <Col span={18}>
              <Card
                title="Top Selling Products"
                className="products-card"
                data-testid="products-card"
              >
                <div className="products-table">
                  <div className="table-header">
                    <div className="header-cell">Name</div>
                    <div className="header-cell">Price</div>
                    <div className="header-cell">Quantity</div>
                    <div className="header-cell">Amount</div>
                  </div>
                  {topSellingProducts.map((product, index) => (
                    <div key={index} className="table-row">
                      <div className="table-cell product-name">
                        {product.name}
                      </div>
                      <div className="table-cell">${product.price}</div>
                      <div className="table-cell">{product.quantity}</div>
                      <div className="table-cell">
                        ${product.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Total Sales"
                className="chart-card sales-card"
                data-testid="total-sales-card"
              >
                <DonutChart data={totalSalesData} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
