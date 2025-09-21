import React from "react";
import Popup from "./Popup";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import { contactsData } from "../../data/mockData";

interface ContactsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactsPopup: React.FC<ContactsPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Contacts"
      className="contacts-popup"
    >
      <div className="contacts-list">
        {contactsData.slice(0, 10).map((contact, index) => (
          <AvatarBlock
            key={contact.id}
            name={contact.name}
            description=""
            avatar={`https://i.pravatar.cc/40?img=${index + 10}`}
          />
        ))}
      </div>
    </Popup>
  );
};

export default ContactsPopup;
