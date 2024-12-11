import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="relative inline-block">

      {count > 0 && (
        <span className="absolute top-[-38px] right-[-55px] inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

