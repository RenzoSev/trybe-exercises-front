import React from 'react';
import { useReddit } from '../../hooks/useReddit';

function Refresh() {
  const { fetchReddit, hour } = useReddit();
  
  return (
    <div>
      <strong>Last updated at {hour}</strong>
      <button type="button" onClick={fetchReddit}>
        Refresh
      </button>
    </div>
  );
}

export default Refresh;
