import { useState } from "react";
import { Table, Button, Input, Pagination, Typography } from "antd";
import { Plus, Filter, ArrowUpDown, Search } from "lucide-react";
import AvatarBlock from "../../components/AvatarBlock/AvatarBlock";
import type { OrderData } from "../../types";
import { ordersData } from "../../data/mockData";
import "./TablePage.scss";

const { Title } = Typography;

const TablePage = () => {
  const [data, setData] = useState<OrderData[]>(ordersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [searchText, setSearchText] = useState("");

  const getStatusColor = (status: string) => {
    const colors = {
      "In Progress": "#3B82F6",
      Complete: "#10B981",
      Pending: "#F59E0B",
      Approved: "#8B5CF6",
      Rejected: "#EF4444",
    };
    return colors[status as keyof typeof colors] || "#6B7280";
  };

  const columns = [
    {
      title: "",
      dataIndex: "selected",
      key: "selected",
      width: 48,
      render: () => (
        <input
          type="checkbox"
          className="row-checkbox"
          data-testid="row-checkbox"
        />
      ),
    },
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
      width: 120,
      sorter: (a: OrderData, b: OrderData) => a.id.localeCompare(b.id),
      render: (id: string) => (
        <span className="order-id" data-testid="order-id">
          {id}
        </span>
      ),
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      width: 180,
      render: (user: any, _record: OrderData, index: number) => (
        <AvatarBlock
          name={user.name}
          description=""
          avatar={`https://i.pravatar.cc/32?img=${index + 1}`}
        />
      ),
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      width: 160,
      sorter: (a: OrderData, b: OrderData) =>
        a.project.localeCompare(b.project),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
      render: (address: string) => (
        <span className="address-text">{address}</span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 140,
      sorter: (a: OrderData, b: OrderData) => a.date.localeCompare(b.date),
      render: (date: string) => (
        <div className="date-cell">
          <span className="date-icon">📅</span>
          <span>{date}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      filters: [
        { text: "In Progress", value: "In Progress" },
        { text: "Complete", value: "Complete" },
        { text: "Pending", value: "Pending" },
        { text: "Approved", value: "Approved" },
        { text: "Rejected", value: "Rejected" },
      ],
      onFilter: (value: any, record: OrderData) => record.status === value,
      render: (status: string) => (
        <div
          className="status-tag"
          style={{
            color: getStatusColor(status),
          }}
          data-testid="status-tag"
        >
          <span
            className="status-dot"
            style={{ backgroundColor: getStatusColor(status) }}
          ></span>
          {status}
        </div>
      ),
    },
    {
      title: "",
      key: "actions",
      width: 48,
      render: () => (
        <Button
          type="text"
          size="small"
          className="action-button"
          data-testid="action-button"
        >
          ⋯
        </Button>
      ),
    },
  ];

  const handleSearch = (value: string) => {
    setSearchText(value);
    const filteredData = ordersData.filter(
      (item) =>
        item.user.name.toLowerCase().includes(value.toLowerCase()) ||
        item.project.toLowerCase().includes(value.toLowerCase()) ||
        item.address.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="table-page" data-testid="table-page">
      <div className="table-header">
        <Title level={2} className="page-title">
          Order List
        </Title>

        <div className="table-actions">
          <Button
            type="primary"
            icon={<Plus size={16} />}
            className="add-button"
            data-testid="add-button"
          >
            Add
          </Button>

          <Button
            icon={<Filter size={16} />}
            className="filter-button"
            data-testid="filter-button"
          />

          <Button
            icon={<ArrowUpDown size={16} />}
            className="sort-button"
            data-testid="sort-button"
          />
        </div>
      </div>

      <div className="table-content">
        <div className="main-table-area">
          <div className="table-controls">
            <div className="search-container">
              <Input
                placeholder="Search"
                prefix={<Search size={16} />}
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
                data-testid="table-search"
              />
            </div>
          </div>

          <div className="table-container">
            <Table
              columns={columns}
              dataSource={data}
              rowKey="id"
              pagination={false}
              className="orders-table"
              data-testid="orders-table"
              rowClassName="table-row"
            />

            <div className="table-footer">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={data.length}
                onChange={setCurrentPage}
                showSizeChanger={false}
                className="table-pagination"
                data-testid="table-pagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
