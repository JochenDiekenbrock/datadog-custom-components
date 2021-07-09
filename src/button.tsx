import React, { useRef } from 'react';

export const Button = ({ id }: { id: string }): any => {
  const button = useRef<HTMLButtonElement>(null);

  return (
    <button
      id={id}
      ref={button}
      onClick={() => {
        if (button?.current) {
          button.current.innerText = `clicked on ${id}`;
        }
      }}
    >
      Button {id}
    </button>
  );
};
