import { ReactNode } from "react";

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative";
  icon?: ReactNode;
  color: string;
  className?: string;
}

export interface AvatarBlockProps {
  name: string;
  description?: string;
  avatar?: string;
  timestamp?: string;
  status?: "online" | "offline";
  size?: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

export interface OrderData {
  id: string;
  user: AvatarBlockProps;
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

export interface ProductData {
  name: string;
  price: number;
  quantity: number;
  amount: number;
}

export interface RevenueByLocationData {
  location: string;
  value: number;
}

export interface NotificationData {
  id: string;
  type: "bug" | "user" | "release" | "data" | "page";
  title: string;
  description: string;
  timestamp: string;
  user?: AvatarBlockProps;
}

export interface ActivityData extends AvatarBlockProps {
  id: string;
  action: string;
  timestamp: string;
}

export interface ContactData extends AvatarBlockProps {
  id: string;
}

export type Theme = "light" | "dark";
