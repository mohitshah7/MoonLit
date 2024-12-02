import React, { useState } from "react";
import "./SnippetSection.css";


const SnippetSection = () => {
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const [stories, setStories] = useState([
    { id: 1, username: "HexBlade", thumbnail: "path/to/thumbnail1.jpg", snippet: "This is the first snippet.", seen: false },
    { id: 2, username: "Artist123", thumbnail: "path/to/thumbnail2.jpg", snippet: "This is the second snippet.", seen: false },
    { id: 3, username: "MusicFan", thumbnail: "path/to/thumbnail3.jpg", snippet: "This is the third snippet.", seen: false },
    { id: 4, username: "DesignMaster", thumbnail: "path/to/thumbnail4.jpg", snippet: "This is the fourth snippet.", seen: false },
    { id: 5, username: "Poet123", thumbnail: "path/to/thumbnail5.jpg", snippet: "This is the fifth snippet.", seen: false },
    { id: 6, username: "Dancer99", thumbnail: "path/to/thumbnail6.jpg", snippet: "Dancing is my life!", seen: false },
    { id: 7, username: "WriterX", thumbnail: "path/to/thumbnail7.jpg", snippet: "My latest story is amazing!", seen: false },
    { id: 8, username: "SingerPro", thumbnail: "path/to/thumbnail8.jpg", snippet: "Check out my new song!", seen: false },
    { id: 9, username: "ComicKing", thumbnail: "path/to/thumbnail9.jpg", snippet: "A sneak peek of my comic.", seen: false },
    { id: 10, username: "Traveler", thumbnail: "path/to/thumbnail10.jpg", snippet: "Exploring new places!", seen: false },
  ]);

  const handleStoryClick = (storyId, snippet) => {
    setSelectedSnippet(snippet);
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === storyId ? { ...story, seen: true } : story
      )
    );
  };

  return (
    <div className="snippet-section">
      <div className="story-container">
        <div className="story create-story">
          <span className="add-story-icon">+</span>
        </div>
        {stories.map((story) => (
          <div
            className={`story ${story.seen ? "seen" : ""}`}
            key={story.id}
            onClick={() => handleStoryClick(story.id, story.snippet)}
          >
            <img src={story.thumbnail} alt={`${story.username}'s story`} />
          </div>
        ))}
      </div>

      <div className="selected-snippet-container">
        {selectedSnippet && <p className="selected-snippet">{selectedSnippet}</p>}
      </div>
    </div>
  );
};

export default SnippetSection;
