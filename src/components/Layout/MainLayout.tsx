import { useState, useEffect } from "react";
import { Layout, Card, Typography } from "antd";
import { Outlet } from "react-router-dom";
import {
  Bug,
  User,
  Radio,
  AlertCircle,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import {
  notificationsData,
  activitiesData,
  contactsData,
} from "../../data/mockData";
import "./MainLayout.scss";

const { Content } = Layout;
const { Text } = Typography;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    if (window.innerWidth <= 767) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  // Function to get icon based on notification type
  const getNotificationIcon = (type: string, index: number) => {
    const iconProps = { size: 20, className: "notification-icon" };

    switch (type) {
      case "bug":
        return <Bug {...iconProps} />;
      case "user":
        return <User {...iconProps} />;
      case "subscription":
        return <Radio {...iconProps} />;
      case "alert":
        return <AlertCircle {...iconProps} />;
      case "success":
        return <CheckCircle {...iconProps} />;
      default: {
        const icons = [
          Bug,
          User,
          Radio,
          AlertCircle,
          CheckCircle,
          MessageSquare,
        ];
        const IconComponent = icons[index % icons.length];
        return <IconComponent {...iconProps} />;
      }
    }
  };

  const getIconContainerStyle = (type: string) => {
    return type === "bug"
      ? { backgroundColor: "var(--bright-blue)" }
      : { backgroundColor: "var(--dark-blue)" };
  };

  return (
    <Layout className="main-layout" data-testid="main-layout">
      <Sidebar
        collapsed={collapsed}
        onCollapse={handleCollapse}
        mobileOpen={mobileMenuOpen}
      />

      <Layout className={`main-content ${collapsed ? "collapsed" : ""}`}>
        <Header onMenuClick={handleMenuClick} collapsed={collapsed} />

        <Content className="page-content" data-testid="page-content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </Content>
      </Layout>

      {/* Right Sidebar - Only show on desktop, positioned from top */}
      {isDesktop && (
        <div className="right-sidebar">
          {/* Notifications */}
          <Card
            title="Notifications"
            className="sidebar-card"
            data-testid="notifications-card"
            style={{ backgroundColor: "var(--bg-primary)", border: "none" }}
          >
            <div className="notifications-list">
              {notificationsData.slice(0, 4).map((notification, index) => (
                <div key={notification.id} className="notification-item">
                  <div
                    className="notification-icon-container"
                    style={getIconContainerStyle(notification.type)}
                  >
                    {getNotificationIcon(notification.type, index)}
                  </div>
                  <div className="notification-content">
                    <Text className="notification-title">
                      {notification.title}
                    </Text>
                    <Text className="notification-time">
                      {notification.timestamp}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Activities */}
          <Card
            title="Activities"
            className="sidebar-card"
            data-testid="activities-card"
            style={{ backgroundColor: "var(--card-bg)", border: "none" }}
          >
            <div className="activities-list">
              {activitiesData.slice(0, 5).map((activity) => (
                <AvatarBlock
                  key={activity.id}
                  name={activity.name}
                  description={activity.timestamp}
                  avatar={`https://i.pravatar.cc/40?img=${activity.id}`}
                />
              ))}
            </div>
          </Card>

          {/* Contacts */}
          <Card
            title="Contacts"
            className="sidebar-card"
            data-testid="contacts-card"
            style={{ backgroundColor: "var(--card-bg)", border: "none" }}
          >
            <div className="contacts-list">
              {contactsData.slice(0, 6).map((contact, index) => (
                <AvatarBlock
                  key={contact.id}
                  name={contact.name}
                  description=""
                  avatar={`https://i.pravatar.cc/40?img=${index + 10}`}
                />
              ))}
            </div>
          </Card>
        </div>
      )}

      {mobileMenuOpen && (
        <div
          className={`mobile-overlay ${mobileMenuOpen ? "show" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
          data-testid="mobile-overlay"
        />
      )}
    </Layout>
  );
};

export default MainLayout;
