import React, { useState } from 'react';
import './PostCreation.css';  // Make sure the CSS is linked

const PostCreation = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [caption, setCaption] = useState('');
  const [song, setSong] = useState(null);
  const [visibility, setVisibility] = useState('public');
  const [tags, setTags] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSongChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSong(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Post created:", { image, category, caption, song, visibility, tags });
  };

  return (
    <div className="post-creation-container">
      <div className="post-creation-wrapper">
        <h1>Create New Post</h1>

        {/* Image Upload */}
        <div className="input-group">
          <label htmlFor="image">Select an Image/Video</label>
          <input
            type="file"
            id="image"
            accept="image/*,video/*"
            onChange={handleImageChange}
          />
          {image && <img src={image} alt="Selected" className="preview-image" />}
        </div>

        {/* Category */}
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="artist">Artist</option>
            <option value="videographer">Videographer</option>
            <option value="musician">Musician</option>
            <option value="photographer">Photographer</option>
            <option value="writer">Writer</option>
            <option value="singer">Singer</option>
          </select>
        </div>

        {/* Caption */}
        <div className="input-group">
          <label htmlFor="caption">Caption</label>
          <textarea
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write a caption..."
          />
        </div>

        {/* Background Song */}
        <div className="input-group">
          <label htmlFor="song">Upload a Background Song (Optional)</label>
          <input
            type="file"
            id="song"
            accept="audio/*"
            onChange={handleSongChange}
          />
          {song && <audio controls src={song}></audio>}
        </div>

        {/* Visibility */}
        <div className="input-group">
          <label htmlFor="visibility">Visibility</label>
          <select
            id="visibility"
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        {/* Tags */}
        <div className="input-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Add tags separated by commas"
          />
        </div>
        <div>
           {/* Post Button */}
        <button className="submit-btn" onClick={handleSubmit}>
          Post
        </button>
          
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
