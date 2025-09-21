import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  FolderOpen,
  GraduationCap,
  User,
  Building2,
  FileText,
  Users,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import "./Sidebar.scss";
import AvatarBlock from "../AvatarBlock/AvatarBlock";

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  mobileOpen?: boolean;
}

const Sidebar = ({
  collapsed,
  onCollapse,
  mobileOpen = false,
}: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "favorites",
      label: "Favorites",
      type: "group",
      children: [
        {
          key: "/",
          label: "Overview",
          icon: <Home size={18} />,
        },
        {
          key: "/projects",
          label: "Projects",
          icon: <FolderOpen size={18} />,
        },
      ],
    },
    {
      key: "recently",
      label: "Recently",
      type: "group",
      children: [
        {
          key: "/overview-recent",
          label: "Overview",
          icon: <Home size={18} />,
        },
        {
          key: "/projects-recent",
          label: "Projects",
          icon: <FolderOpen size={18} />,
        },
      ],
    },
    {
      key: "dashboards",
      label: "Dashboards",
      type: "group",
      children: [
        {
          key: "/dashboard",
          label: "Default",
          icon: <Home size={18} />,
        },
        {
          key: "/ecommerce",
          label: "eCommerce",
          icon: <ShoppingCart size={18} />,
        },
        {
          key: "/projects-dash",
          label: "Projects",
          icon: <FolderOpen size={18} />,
        },
        {
          key: "/online-courses",
          label: "Online Courses",
          icon: <GraduationCap size={18} />,
        },
      ],
    },
    {
      key: "pages",
      label: "Pages",
      type: "group",
      children: [
        {
          key: "/user-profile",
          label: "User Profile",
          icon: <User size={18} />,
          children: [
            {
              key: "/user-profile/overview",
              label: "Overview",
            },
            {
              key: "/user-profile/projects",
              label: "Projects",
            },
            {
              key: "/user-profile/campaigns",
              label: "Campaigns",
            },
            {
              key: "/user-profile/documents",
              label: "Documents",
            },
            {
              key: "/user-profile/followers",
              label: "Followers",
            },
          ],
        },
        {
          key: "/account",
          label: "Account",
          icon: <CreditCard size={18} />,
        },
        {
          key: "/corporate",
          label: "Corporate",
          icon: <Building2 size={18} />,
        },
        {
          key: "/blog",
          label: "Blog",
          icon: <FileText size={18} />,
        },
        {
          key: "/social",
          label: "Social",
          icon: <MessageSquare size={18} />,
        },
      ],
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const getSidebarWidth = () => {
    if (typeof window !== "undefined") {
      return Math.min(Math.max(window.innerWidth * 0.15, 200), 280);
    }
    return 240;
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={getSidebarWidth()}
      collapsedWidth={80}
      className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}
      data-testid="sidebar"
    >
      <div className="sidebar-header" data-testid="sidebar-header">
        <div className="logo">
          <div className="user-profile" data-testid="user-profile">
            <AvatarBlock
              name=""
              description=""
              avatar="https://avatar.iran.liara.run/public/44"
              size={30}
            />
          </div>
          {!collapsed && <span className="logo-text">ByeWind</span>}
        </div>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        className="sidebar-menu"
        data-testid="sidebar-menu"
      />
    </Sider>
  );
};

export default Sidebar;
