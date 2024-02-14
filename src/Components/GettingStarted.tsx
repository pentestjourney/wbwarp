import React from 'react';

const GettingStarted = () => {
  return (
    <div className="min-h-full mt-16  text-blue-950 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-mono font-bold text-gray-800 mb-6">Getting Started with Internet Computer</h1>
        <p className="font-mono text-gray-700 mb-8">
          Explore how to build applications on the Internet Computer using Motoko React TypeScript template.
        </p>
        <a href="https://internetcomputer.org/docs/current/developer-docs/setup/react-quickstart" target="_blank" rel="noopener noreferrer" className="font-mono text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out text-lg">
          Access the React Quickstart Documentation &rarr;
        </a>
      </div>
    </div>
  );
};

export default GettingStarted;

