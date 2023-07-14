import React from 'react'

const Error = ({ error }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center text-5xl lg:text-9xl bg-red-500 text-white text-center">
        {error}, try again later!
      </div>
    );
  };
  
  export default Error;