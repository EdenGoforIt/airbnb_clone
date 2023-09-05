import React from 'react';
('user client');

// every component in the app folder is considered as a server component
// we need to make it as a client component
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">{children}</div>;
};

export default Container;
