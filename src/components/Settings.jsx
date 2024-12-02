import React from "react";
import "./Settings.css";

const Settings = () => {
  const settings = [
    { name: "Edit Profile", action: () => console.log("Edit Profile") },
    { name: "Change Password", action: () => console.log("Change Password") },
    { name: "Privacy Settings", action: () => console.log("Privacy Settings") },
    { name: "Manage Subscriptions", action: () => console.log("Manage Subscriptions") },
    { name: "Logout", action: () => console.log("Logout") },
  ];

  return (
    <div className="settings-container">
      <h2 className="settings-header">Settings</h2>
      <ul className="settings-list">
        {settings.map((item, index) => (
          <li
            key={index}
            className="settings-item"
            onClick={item.action}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
