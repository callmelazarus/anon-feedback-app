import React from 'react';

const FeedbackBox = () => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <input
        type="text"
        placeholder="Enter Feedback"
        className="flex-grow p-2 border border-gray-300 rounded-md text-black"
      />
      <select className="p-2 border border-gray-300 rounded-md text-black">
        <option>Andrew Cho</option>
        <option>Andrew Wang</option>
        <option>Isaac Oh</option>
        <option>Jay Go</option>
        <option>Jerry Young</option>
        <option>Phil Lee</option>
      </select>
      <button className="p-2 bg-blue-500 text-white rounded-md">Submit</button>
    </div>
  );
};

export default FeedbackBox;
