import React from "react";
import { Typography } from "antd";
import {
  Bug,
  User,
  Radio,
  AlertCircle,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import Popup from "./Popup";
import { notificationsData } from "../../data/mockData";

const { Text } = Typography;

interface NotificationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsPopup: React.FC<NotificationsPopupProps> = ({
  isOpen,
  onClose,
}) => {
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
    return type === "bug" ? { backgroundColor: "var(--bright-blue)" } : {};
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Notifications"
      className="notifications-popup"
    >
      <div className="notifications-list">
        {notificationsData.slice(0, 6).map((notification, index) => (
          <div key={notification.id} className="notification-item">
            <div
              className="notification-icon-container"
              style={getIconContainerStyle(notification.type)}
            >
              {getNotificationIcon(notification.type, index)}
            </div>
            <div className="notification-content">
              <Text className="notification-title">{notification.title}</Text>
              <Text className="notification-time">
                {notification.timestamp}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Popup>
  );
};

export default NotificationsPopup;
