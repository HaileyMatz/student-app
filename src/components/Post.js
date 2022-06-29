import React from 'react';
import { useState } from 'react';

export const Post = () => {
  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    console.log("We're inside increaseLikes!");
    setLikesCount(likesCount + 1);
  };

  return (
    <section>
      <p>The number of Likes: {likesCount}</p>
      <button onClick={increaseLikes}>Like</button>
    </section>
  );
};
