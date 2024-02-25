import React, { useState, useEffect } from 'react';
import JobListing from './components/JobListing';


const App = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        // Fetch job listings when component mounts
        fetchJobListings();
    }, []);

    const fetchJobListings = async () => {
        try {
            // Fetch job listings from APIs using fetch or axios
            const response = await fetch('API_ENDPOINT');
            const data = await response.json();
            setJobListings(data);
        } catch (error) {
            console.error('Error fetching job listings:', error);
        }
    };

    const handleApply = (jobId) => {
        // Logic to handle job application
        console.log('Applying for job:', jobId);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contract Collector</h1>
            {jobListings.map(job => (
                <JobListing
                    key={job.id}
                    title={job.title}
                    location={job.location}
                    pay={job.pay}
                    dateRequired={job.dateRequired}
                    onApply={() => handleApply(job.id)}
                />
            ))}
        </div>
    );
};

export default App;
