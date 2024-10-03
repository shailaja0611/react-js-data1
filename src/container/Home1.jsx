// src/components/Home.js
import React, { useState } from 'react';
import axios from 'axios';

const Home1 = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  
  const handleShorten = async () => {
    try {
      const response = await axios.post('/api/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL', error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Short URL copied to clipboard!');
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long URL"
      />
      <button onClick={handleShorten}>Shorten URL</button>
      {shortUrl && (
        <div>
          <p>Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
          <button onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default Home1;
