import React from 'react';
import { useReddit } from '../../hooks/useReddit';

function Posts() {
  const { posts, loading } = useReddit();

  if (loading) return <p>Loading...</p>
  return (
    <div>
      <ul>
        {posts.map((data, index) => (
          <li key={index}>{data.data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
