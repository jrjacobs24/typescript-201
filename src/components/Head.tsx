import React from 'react';

type HeadProps = {
  title: string;
  isActive: boolean;
}

export const Head = (props: HeadProps) => {
  const { title, isActive } = props;

  return (
    <div>
      <h1>{title}</h1>

      {isActive && <h3>Active</h3>}
    </div>
  );
};
