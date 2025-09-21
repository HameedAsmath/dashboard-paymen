import React from "react";
import Popup from "./Popup";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import { activitiesData } from "../../data/mockData";

interface ActivitiesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ActivitiesPopup: React.FC<ActivitiesPopupProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Activities"
      className="activities-popup"
    >
      <div className="activities-list">
        {activitiesData.slice(0, 8).map((activity) => (
          <AvatarBlock
            key={activity.id}
            name={activity.name}
            description={activity.timestamp}
            avatar={`https://i.pravatar.cc/40?img=${activity.id}`}
          />
        ))}
      </div>
    </Popup>
  );
};

export default ActivitiesPopup;
