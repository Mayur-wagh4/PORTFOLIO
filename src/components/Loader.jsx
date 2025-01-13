import { Html, useProgress } from '@react-three/drei';
import React from 'react';

const Loader = () => {
    const { progress } = useProgress();
  return (
    <Html center>

        <div className="flex flex-col items-center justify-center">
          <div className="w-10 h-10 relative">
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-red-500"
              style={{
                clipPath: `circle(20% at center)`,
                zIndex: 1,
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden"
              style={{
                clipPath: `inset(0 0 0 ${progress * 100}%)`,
                background: 'linear-gradient(to right, transparent, #6366F1)',
                animation: 'spin 1s linear infinite', 
                zIndex: 2,
              }}
            ></div>
          </div>
        </div>

    </Html>
  );
};

export default Loader;
