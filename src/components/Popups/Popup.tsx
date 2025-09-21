import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import "./Popup.scss";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div
        ref={popupRef}
        className={`popup-container ${className}`}
        data-testid="popup"
      >
        <div className="popup-header">
          <h3 className="popup-title">{title}</h3>
          <button
            className="popup-close-button"
            onClick={onClose}
            data-testid="popup-close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
