import React from "react";
import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    { id: 1, text: "User1 liked your post", type: "like", time: "2m ago" },
    { id: 2, text: "User2 commented: 'Great post!'", type: "comment", time: "10m ago" },
    { id: 3, text: "User3 started following you", type: "follow", time: "1h ago" },
    { id: 4, text: "System: Update completed", type: "system", time: "3h ago" },
  ];

  return (
    <div className="notifications-container">
      <h2 className="notifications-header">Notifications</h2>
      <ul className="notifications-list">
        {notifications.map((notif) => (
          <li key={notif.id} className={`notification-item ${notif.type}`}>
            <div className="notif-icon">{/* Add icons here */}</div>
            <div className="notif-details">
              <p className="notif-text">{notif.text}</p>
              <span className="notif-time">{notif.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
