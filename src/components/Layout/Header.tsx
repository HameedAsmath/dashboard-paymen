import { Layout, Input, Badge, Button, Dropdown } from "antd";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu as MenuIcon,
  Star,
  Settings,
  Archive,
  Activity,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../../theme/ThemeContext";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import NotificationsPopup from "../Popups/NotificationsPopup";
import ActivitiesPopup from "../Popups/ActivitiesPopup";
import ContactsPopup from "../Popups/ContactsPopup";
import "./Header.scss";

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onMenuClick: () => void;
  collapsed: boolean;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { toggleTheme, isDark } = useTheme();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1200);
      setIsMobile(width <= 768);

      // Close popups when switching to desktop
      if (width >= 1200) {
        setActivePopup(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePopupToggle = (popupName: string) => {
    setActivePopup(activePopup === popupName ? null : popupName);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const userMenuItems = [
    {
      key: "profile",
      label: "Profile Settings",
      icon: <Settings size={16} />,
    },
    {
      key: "archive",
      label: "Archive",
      icon: <Archive size={16} />,
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      label: "Sign out",
    },
  ];

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
              <Star size={14} />
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
          placeholder={isMobile ? "Search..." : "Search"}
          prefix={<Search size={isMobile ? 14 : 16} />}
          className="search-input"
          data-testid="search-input"
        />
      </div>

      <div className="header-right">
        <Button
          type="text"
          icon={
            isDark ? (
              <Sun size={isMobile ? 16 : 18} />
            ) : (
              <Moon size={isMobile ? 16 : 18} />
            )
          }
          onClick={toggleTheme}
          className="theme-toggle"
          data-testid="theme-toggle"
        />

        {/* Show archive and settings buttons only on desktop */}
        {isDesktop && (
          <>
            <Button
              type="text"
              className="icon-button"
              icon={<Archive size={18} />}
            />

            <Button
              type="text"
              className="icon-button"
              icon={<Settings size={18} />}
            />
          </>
        )}

        {/* Show mobile popup buttons only on smaller screens */}
        {!isDesktop && (
          <>
            <Button
              type="text"
              icon={<Activity size={isMobile ? 16 : 18} />}
              className={`popup-button ${
                activePopup === "activities" ? "active" : ""
              }`}
              onClick={() => handlePopupToggle("activities")}
              data-testid="activities-button"
            />

            <Button
              type="text"
              icon={<Users size={isMobile ? 16 : 18} />}
              className={`popup-button ${
                activePopup === "contacts" ? "active" : ""
              }`}
              onClick={() => handlePopupToggle("contacts")}
              data-testid="contacts-button"
            />
          </>
        )}

        <Badge count={3} size="small">
          <Button
            type="text"
            icon={<Bell size={isMobile ? 16 : 18} />}
            className={`notification-button ${
              activePopup === "notifications" ? "active" : ""
            }`}
            onClick={() =>
              isDesktop ? undefined : handlePopupToggle("notifications")
            }
            data-testid="notification-button"
          />
        </Badge>

        {/* <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <div className="user-profile" data-testid="user-profile">
            <AvatarBlock
              name="ByeWind"
              description=""
              avatar="https://avatar.iran.liara.run/public/44"
            />
          </div>
        </Dropdown> */}

        {/* Popup Components */}
        <NotificationsPopup
          isOpen={activePopup === "notifications"}
          onClose={closePopup}
        />
        <ActivitiesPopup
          isOpen={activePopup === "activities"}
          onClose={closePopup}
        />
        <ContactsPopup
          isOpen={activePopup === "contacts"}
          onClose={closePopup}
        />
      </div>
    </AntHeader>
  );
};

export default Header;
