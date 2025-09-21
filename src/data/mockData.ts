import type {
  OrderData,
  ProductData,
  RevenueByLocationData,
  NotificationData,
  ActivityData,
  ContactData,
  ChartDataPoint,
} from "../types";

export const metricsData = {
  customers: {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    changeType: "positive" as const,
    color: "#e3f5ff",
  },
  orders: {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    changeType: "negative" as const,
    color: "#f8f9fb",
  },
  revenue: {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    changeType: "positive" as const,
    color: "#f8f9fb",
  },
  growth: {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    changeType: "positive" as const,
    color: "#e6ecf6",
  },
};

export const projectionsVsActualsData: ChartDataPoint[] = [
  { name: "Jan", projections: 15, actuals: 18 },
  { name: "Feb", projections: 20, actuals: 22 },
  { name: "Mar", projections: 18, actuals: 19 },
  { name: "Apr", projections: 25, actuals: 28 },
  { name: "May", projections: 22, actuals: 20 },
  { name: "Jun", projections: 28, actuals: 30 },
];

export const revenueData: ChartDataPoint[] = [
  { name: "Jan", current: 10, previous: 8 },
  { name: "Feb", current: 15, previous: 12 },
  { name: "Mar", current: 18, previous: 15 },
  { name: "Apr", current: 12, previous: 18 },
  { name: "May", current: 15, previous: 20 },
  { name: "Jun", current: 20, previous: 18 },
];

export const revenueByLocationData: RevenueByLocationData[] = [
  { location: "New York", value: 72000 },
  { location: "San Francisco", value: 39000 },
  { location: "Sydney", value: 25000 },
  { location: "Singapore", value: 61000 },
];

export const totalSalesData = [
  { name: "Direct", value: 38.6, amount: 300.56 },
  { name: "Affiliate", value: 22.5, amount: 135.18 },
  { name: "Sponsored", value: 30.1, amount: 154.02 },
  { name: "E-mail", value: 8.8, amount: 48.96 },
];

export const topSellingProducts: ProductData[] = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

export const ordersData: OrderData[] = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "", description: "" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "", description: "" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "", description: "" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "", description: "" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "", description: "" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

export const notificationsData: NotificationData[] = [
  {
    id: "1",
    type: "bug",
    title: "You have a bug that needs...",
    description: "Just now",
    timestamp: "Just now",
  },
  {
    id: "2",
    type: "user",
    title: "New user registered",
    description: "59 minutes ago",
    timestamp: "59 minutes ago",
  },
  {
    id: "3",
    type: "bug",
    title: "You have a bug that needs...",
    description: "12 hours ago",
    timestamp: "12 hours ago",
  },
  {
    id: "4",
    type: "user",
    title: "Andi Lane subscribed to you",
    description: "Today, 11:59 AM",
    timestamp: "Today, 11:59 AM",
  },
];

export const activitiesData: ActivityData[] = [
  {
    id: "1",
    name: "You have a bug that needs...",
    description: "Just now",
    avatar: "",
    action: "bug report",
    timestamp: "Just now",
  },
  {
    id: "2",
    name: "Released a new version",
    description: "59 minutes ago",
    avatar: "",
    action: "release",
    timestamp: "59 minutes ago",
  },
  {
    id: "3",
    name: "Submitted a bug",
    description: "12 hours ago",
    avatar: "",
    action: "bug submission",
    timestamp: "12 hours ago",
  },
  {
    id: "4",
    name: "Modified A data in Page X",
    description: "Today, 11:59 AM",
    avatar: "",
    action: "data modification",
    timestamp: "Today, 11:59 AM",
  },
  {
    id: "5",
    name: "Deleted a page in Project X",
    description: "Feb 2, 2023",
    avatar: "",
    action: "page deletion",
    timestamp: "Feb 2, 2023",
  },
];

export const contactsData: ContactData[] = [
  { id: "1", name: "Natali Craig", description: "", avatar: "" },
  { id: "2", name: "Drew Cano", description: "", avatar: "" },
  { id: "3", name: "Orlando Diggs", description: "", avatar: "" },
  { id: "4", name: "Andi Lane", description: "", avatar: "" },
  { id: "5", name: "Kate Morrison", description: "", avatar: "" },
  { id: "6", name: "Koray Okumus", description: "", avatar: "" },
];
