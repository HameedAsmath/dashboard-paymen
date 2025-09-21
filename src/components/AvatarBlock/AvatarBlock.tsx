import { Avatar } from "antd";
import { User } from "lucide-react";
import type { AvatarBlockProps } from "../../types";
import "./AvatarBlock.scss";

const AvatarBlock = ({
  name,
  description,
  avatar,
  timestamp,
  status,
  size = 40,
}: AvatarBlockProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      "#6366F1",
      "#8B5CF6",
      "#EC4899",
      "#EF4444",
      "#F59E0B",
      "#10B981",
      "#3B82F6",
      "#6366F1",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="avatar-block" data-testid="avatar-block">
      <div className="avatar-block__avatar-container">
        <Avatar
          size={size}
          src={avatar}
          style={{
            backgroundColor: avatar ? undefined : getAvatarColor(name),
            fontSize: "14px",
            fontWeight: 600,
          }}
          data-testid="avatar"
        >
          {avatar ? null : getInitials(name)}
        </Avatar>
        {status && (
          <div
            className={`avatar-block__status ${status}`}
            data-testid="avatar-status"
          />
        )}
      </div>

      <div className="avatar-block__content">
        <div className="avatar-block__name" data-testid="avatar-name">
          {name}
        </div>
        {description && (
          <div
            className="avatar-block__description"
            data-testid="avatar-description"
          >
            {description}
          </div>
        )}
        {timestamp && (
          <div
            className="avatar-block__timestamp"
            data-testid="avatar-timestamp"
          >
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarBlock;
