// JobPost.js

import React from 'react';

const JobPost = ({ title, location, pay, date, onApply }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">Location: {location}</p>
        <p className="text-gray-700 text-base">Pay: {pay}</p>
        <p className="text-gray-700 text-base">Date Required: {date}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobPost;