import React, { useRef, useState } from 'react';

export const Button = ({
  id,
  onclick
}: {
  id: string;
  onclick?: (count: number) => unknown;
}): any => {
  const button = useRef<HTMLButtonElement>(null);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        id={id}
        ref={button}
        onClick={() => {
          setCount(count + 1);
          if (onclick) {
            onclick(count + 1);
          }
        }}
      >
        Button {id}
      </button>
      Number of clicks: {count}
    </div>
  );
};
