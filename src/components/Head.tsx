import React from 'react';

type HeadProps = {
  title: string;
  isActive?: boolean; // Optional
}

export const Head = (props: HeadProps) => {
  const { title, isActive = false } = props;

  return (
    <div>
      <h1>{title}</h1>

      {isActive && <h3>Active</h3>}
    </div>
  );
};
