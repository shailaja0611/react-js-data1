import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    bio: 'Short bio about yourself.'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!');
    // Handle profile update logic here, e.g., API call
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={user.bio}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
