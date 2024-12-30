import React from 'react';
import { FadeLoader } from 'react-spinners';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div>
      <FadeLoader
        className={className}
        color='white'
        radius={32}
      />
    </div>
  );
};

export default Loader;
