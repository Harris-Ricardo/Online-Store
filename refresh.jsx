import React, { useState } from 'react';
import PullToRefresh from 'react-pull-to-refresh';

const MyComponent = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    return new Promise((resolve) => {
      // Simulate an API call or other async operation
      setTimeout(() => {
        setRefreshing(false);
        resolve();
      }, 2000);
    });
  };

  return (
    <PullToRefresh
      onRefresh={onRefresh}
      refreshing={refreshing}
      distanceToRefresh={100} // Distance in pixels to refresh
      icon={<i className="fas fa-sync-alt" />} // Custom icon
      iconSize={32} // Icon size in pixels
      iconColor="#333" // Icon color
      backgroundColor="#f5f5f5" // Background color
      className="my-pull-to-refresh" // Custom class name
    >
      {/* Your content here */}
    </PullToRefresh>
  );
};

export default MyComponent;