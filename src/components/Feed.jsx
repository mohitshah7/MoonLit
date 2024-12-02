import React from 'react';
import './Feed.css';
import mockPosts from './mockPosts'; // Assuming you have this data

import { FaThumbsUp, FaComment, FaShare, FaSave } from 'react-icons/fa'; // Importing icons

const Feed = () => {
  return (
    <div className="feed-container">
      {mockPosts.map((post, index) => (
        <div key={index} className="post">
          {/* Post Header: Profile Picture and Username */}
          <div className="post-header">
            <img src={post.profilePic} alt="Profile" className="profile-pic" />
            <div className="post-user-details">
              <h4>{post.username}</h4>
              <p>{post.userStatus}</p>
            </div>
          </div>

          {/* Post Media (Image or Video) */}
          <div className="post-media">
            {post.mediaType === 'image' ? (
              <img src={post.media} alt="Post content" className="post-content" />
            ) : (
              <video controls className="post-content">
                <source src={post.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Post Caption and Tags */}
          <div className="post-caption">
            <p>{post.caption}</p>
            <div className="post-tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">#{tag}</span>
              ))}
            </div>
          </div>

          {/* Post Actions (Like, Comment, Share, Save) */}
          <div className="post-actions">
            <div className="action-button">
              <FaThumbsUp /> <span>Like</span>
            </div>
            <div className="action-button">
              <FaComment /> <span>Comment</span>
            </div>
            <div className="action-button">
              <FaShare /> <span>Share</span>
            </div>
            <div className="action-button">
              <FaSave /> <span>Save</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
