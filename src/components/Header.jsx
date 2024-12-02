import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPen, FaSearch, FaPlusCircle } from 'react-icons/fa'; // Example icons
import logo from '../assets/images/IMG_20241009_201029.png';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="bg-black px-6 py-4 text-white shadow-lg relative z-10">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Logo Section */}
        <div className="logo mb-4">
          <img
            src={logo}
            alt="Moonlit logo"
            className="w-32 h-auto rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Navbar under Logo */}
        <nav>
          <ul className="flex justify-center space-x-8">
            {/* Pre-login Navbar */}
            {!isLoggedIn && (
              <>
                <li>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transition-all duration-300 hover:text-yellow-400 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-white text-lg font-bold transition-all duration-300 hover:text-yellow-400 hover:underline"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="text-white text-lg font-bold transition-all duration-300 hover:text-yellow-400 hover:underline"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* Post-login Navbar */}
            {isLoggedIn && (
              <>
                <li>
                  <Link
                    to="/home"
                    className="text-white text-lg font-bold flex items-center space-x-2 transition-all duration-300 hover:text-yellow-400 hover:underline"
                  >
                    <FaHome />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/snippets"
                    
                    className="text-white text-lg font-bold flex items-center space-x-2 transition-all duration-300 hover:text-yellow-400 hover:underline"
                  >
                    <FaPen />
                    <span >Snippets</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/explore"
                    className="text-white text-lg font-bold flex items-center space-x-2 transition-all duration-300 hover:text-yellow-400 hover:underline"
                  >
                    <FaSearch />
                    <span>Explore</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-post"
                    className="text-white text-lg font-bold flex items-center space-x-2 transition-all duration-300 hover:text-yellow-400 hover:underline"
                  >
                    <FaPlusCircle />
                    <span>New Post</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
