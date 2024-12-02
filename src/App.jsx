import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import Footer from './components/Footer'; 
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import PostLoginHome from './components/PostLoginHome'; 
import PostCreation from './components/PostCreation'; 
import SnippetSection from './components/SnippetSection'; 
import ExploreSection from './components/ExploreSection'; 
import Profile from './components/ProfilePage'; 
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import './tailwind.css'; 
import './App.css'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      
      <div className="app-container">
        {isLoggedIn && <sidebar setIsLoggedIn={setIsLoggedIn} />}
        
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <PostLoginHome setIsLoggedIn={setIsLoggedIn} /> // Pass setIsLoggedIn to handle logout
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/new-post"
            element={
              isLoggedIn ? (
                <PostCreation />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route
            path="/snippets"
            element={isLoggedIn ? <SnippetSection /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/explore"
            element={isLoggedIn ? <ExploreSection /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
