import React from 'react';

const JobListing = ({ title, location, pay, dateRequired, onApply }) => {
    return (
        <div className="p-4 border mb-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>Location: {location}</p>
            <p>Pay: {pay}</p>
            <p>Date Required: {dateRequired}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onApply}>Apply</button>
        </div>
    );
};

export default JobListing;
