import { Layout, Input, Badge, Button } from "antd";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu as MenuIcon,
  Settings,
  Archive,
} from "lucide-react";
import { useTheme } from "../../theme/ThemeContext";
import "./Header.scss";

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onMenuClick: () => void;
  collapsed?: boolean;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <AntHeader className="app-header" data-testid="app-header">
      <div className="header-left">
        <Button
          type="text"
          icon={<MenuIcon size={18} />}
          onClick={onMenuClick}
          className="menu-button"
          data-testid="menu-toggle"
        />

        <div className="breadcrumb-section">
          <div className="breadcrumb-nav">
            <Button type="text" size="small" className="nav-button">
              <Archive size={14} />
            </Button>
            <Button type="text" size="small" className="nav-button">
              <Archive size={14} />
            </Button>
          </div>

          <div className="breadcrumb-info">
            <span className="breadcrumb-label">Dashboards</span>
            <span className="breadcrumb-current">Default</span>
          </div>
        </div>
      </div>

      <div className="header-center">
        <Input
          placeholder="Search"
          prefix={<Search size={16} />}
          className="search-input"
          data-testid="search-input"
        />
      </div>

      <div className="header-right">
        <Button
          type="text"
          icon={isDark ? <Sun size={18} /> : <Moon size={18} />}
          onClick={toggleTheme}
          className="theme-toggle"
          data-testid="theme-toggle"
        />

        <Button
          type="text"
          className="icon-button"
          icon={<Archive size={18} />}
        ></Button>

        <Button
          type="text"
          className="icon-button"
          icon={<Settings size={18} />}
        ></Button>

        <Badge count={3} size="small">
          <Button
            type="text"
            icon={<Bell size={18} />}
            className="notification-button"
            data-testid="notification-button"
          />
        </Badge>
      </div>
    </AntHeader>
  );
};

export default Header;
