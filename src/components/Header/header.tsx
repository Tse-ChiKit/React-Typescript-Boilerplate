import React, { useState } from 'react';

type titleMsg = {
  headline: string;
  editNo: number;
};

const obj = {
  headline: 'testing',
  editNo: 12,
};

function Header() {
  const [title, setTitle] = useState<titleMsg | null>(obj);

  return (
    <h1>
      {title?.headline} + {title?.editNo}
    </h1>
  );
}

export default Header;
