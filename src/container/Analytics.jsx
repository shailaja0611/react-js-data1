// src/components/Analytics.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('/api/analytics');
        setAnalyticsData(response.data);
      } catch (error) {
        console.error('Error fetching analytics', error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div>
      <h1>Analytics</h1>
      <ul>
        {analyticsData.map((data) => (
          <li key={data.shortUrl}>
            <p>Short URL: {data.shortUrl}</p>
            <p>Clicks: {data.clicks}</p>
            <p>Referral Sources: {data.referralSources.join(', ')}</p>
            {/* Add more metrics as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
