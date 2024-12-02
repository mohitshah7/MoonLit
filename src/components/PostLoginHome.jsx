import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './PostLoginHome.css';
import Feed from './Feed';
import { FaUserCircle, FaBell, FaCog, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

const PostLoginHome = ({ setIsLoggedIn }) => {
  const [messages, setMessages] = useState([]); // Store messages
  const [newMessage, setNewMessage] = useState(''); // New message input
  const navigate = useNavigate(); // To navigate after logout

  // Send a message
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'You', text: newMessage }]);
      setNewMessage(''); // Clear input field
    }
  };

  // Handle logout with confirmation
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?'); // Confirmation alert
    if (confirmLogout) {
      setIsLoggedIn(false); // Update login state
      navigate('/'); // Redirect to home page or login page
    }
  };

  return (
    <div className="post-login-home">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-nav">
          <Link to="/profile" className="nav-item">
            <FaUserCircle /> <span className="nav-text">Profile</span>
          </Link>
          <Link to="/notifications" className="nav-item">
            <FaBell /> <span className="nav-text">Notifications</span>
          </Link>
          <Link to="/settings" className="nav-item">
            <FaCog /> <span className="nav-text">Settings</span>
          </Link>
          <Link to="#privacy" className="nav-item">
            <FaFileAlt /> <span className="nav-text">Privacy Policy</span>
          </Link>
          <Link to="#terms" className="nav-item">
            <FaFileAlt /> <span className="nav-text">Terms & Conditions</span>
          </Link>
        </div>
        
        {/* Logout Button */}
        <div className="logout-container">
          <button onClick={handleLogout} className="nav-item logout-button">
            <FaSignOutAlt /> <span className="nav-text">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="feed">
          <h2>Latest Posts</h2>
          <Feed />
        </div>

        {/* Message Inbox */}
        <div className="message-inbox">
          <div className="chat-header">
            <h3>Chat</h3>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                <strong>{message.sender}: </strong>{message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostLoginHome;
