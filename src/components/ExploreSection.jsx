import React, { useState } from "react";
import "./ExploreSection.css";
import spaceImage from '../assets/images/polar-lights.jpg';

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="explore-container">
      <div className="explore-section" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${spaceImage})` }}>
        
        {/* Heading */}
        <h1 className="explore-heading">Explore the Unknowns, Creator!</h1>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search creators, hashtags, or categories..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* Main Explore Section */}
        <div className="explore-main">
          <h2 className="section-title">Explore Posts</h2>
          <div className="explore-posts">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((post, index) => (
              <div key={index} className="post-card">
                <img
                  src={`https://via.placeholder.com/350?text=Post+${post}`}
                  alt={`Post ${post}`}
                />
                <div className="post-info">
                  <h3>Post Title {post}</h3>
                  <p>Creator Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Creators Section */}
        <div className="top-creators">
          <h3>Top Creators</h3>
          <div className="creator-cards">
            {[1, 2, 3, 4, 5].map((creator, index) => (
              <div key={index} className="creator-card">
                <img
                  src={`https://via.placeholder.com/100?text=Creator+${creator}`}
                  alt={`Creator ${creator}`}
                />
                <p>Creator {creator}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
