import React, { useState } from 'react';

const ProductListPage = () => {
  const [text, setText] = useState<string>('Product List Page');

  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default ProductListPage;
