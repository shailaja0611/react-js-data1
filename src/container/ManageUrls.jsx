// src/components/ManageUrls.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageUrls = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('/api/urls');
        setUrls(response.data);
      } catch (error) {
        console.error('Error fetching URLs', error);
      }
    };

    fetchUrls();
  }, []);

  const handleDelete = async (shortUrl) => {
    if (window.confirm('Are you sure you want to delete this URL?')) {
      try {
        await axios.delete(/api/urls/${shortUrl});
        setUrls(urls.filter((url) => url.shortUrl !== shortUrl));
      } catch (error) {
        console.error('Error deleting URL', error);
      }
    }
  };

  return (
    <div>
      <h1>Manage URLs</h1>
      <ul>
        {urls.map((url) => (
          <li key={url.shortUrl}>
            <span>{url.shortUrl}</span>
            <button onClick={() => handleDelete(url.shortUrl)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUrls;
