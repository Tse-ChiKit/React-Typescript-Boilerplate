import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState<string>('HomePage');

  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default Home;
