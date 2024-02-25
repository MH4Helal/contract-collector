// App.js

import React from 'react';
import JobPost from './JobPost';

const App = () => {
  const jobPostings = [
    {
      id: 1,
      title: 'React Developer',
      location: 'New York',
      pay: '$80,000 - $100,000',
      date: 'Immediate',
    },
    {
      id: 2,
      title: 'Python Developer',
      location: 'San Francisco',
      pay: '$90,000 - $110,000',
      date: 'Urgent',
    },
    // Add more job postings as needed
  ];

  const handleApply = () => {
    // Handle apply button click
    console.log('Applying to the job');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contract Jobs</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobPostings.map((job) => (
          <JobPost key={job.id} {...job} onApply={handleApply} />
        ))}
      </div>
    </div>
  );
};

export default App;