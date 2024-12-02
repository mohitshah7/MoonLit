import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-picture" 
        />
        <div className="profile-info">
          <h2 className="username">Username</h2>
          <p className="bio">Creative artist sharing my journey through art, music, and storytelling. Follow my work!</p>
          <div className="followers-info">
            <span className="followers-count">120 Followers</span>
            <span className="following-count">180 Following</span>
          </div>
          {/* Edit Profile Button */}
          <button className="edit-profile-button">Edit Profile</button>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="profile-tabs">
        <button className="tab-button active">Posts</button>
        <button className="tab-button">Saved</button>
        <button className="tab-button">Settings</button>
      </div>

      {/* Posts Section - Grid Layout */}
      <div className="profile-posts">
        <h3>Recent Posts</h3>
        <div className="posts-grid">
          {/* Example Post Cards */}
          <div className="post-card">
            <img src="https://via.placeholder.com/500x300" alt="Post 1" className="post-image" />
          </div>
          <div className="post-card">
            <img src="https://via.placeholder.com/500x300" alt="Post 2" className="post-image" />
          </div>
          <div className="post-card">
            <img src="https://via.placeholder.com/500x300" alt="Post 3" className="post-image" />
          </div>
          <div className="post-card">
            <img src="https://via.placeholder.com/500x300" alt="Post 4" className="post-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
