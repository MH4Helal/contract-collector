// scrapeJobPostings.js

const puppeteer = require('puppeteer-core');
const fetch = require('node-fetch'); // Import the node-fetch module for making HTTP requests

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true, // Set to true for headless mode, or false for non-headless mode
  });
  const page = await browser.newPage();

  // Navigate to a job board website
  await page.goto('https://example.com/job-postings');

  // Extract job postings and filter for contract positions
  const jobPostings = await page.evaluate(() => {
    // Sample logic to filter for contract positions
    const postings = Array.from(document.querySelectorAll('.job-posting'));
    return postings
      .filter(posting => {
        const title = posting.querySelector('.title').innerText;
        const description = posting.querySelector('.description').innerText;
        // Add logic to filter based on keywords like "contract", "freelance", etc.
        return title.toLowerCase().includes('contract') || description.toLowerCase().includes('contract');
      })
      .map(posting => {
        return {
          title: posting.querySelector('.title').innerText,
          location: posting.querySelector('.location').innerText,
          description: posting.querySelector('.description').innerText,
          // Add more fields as needed
        };
      });
  });

  // Output the job postings in a suitable format for your backend integration
  const formattedJobPostings = {
    jobPostings: jobPostings,
    source: 'example.com', // Include the source of the job postings
    // Add more metadata or structure as per your backend requirements
  };

  // Send the formatted job postings to your backend API
  const backendEndpoint = 'https://your-backend-api.com/job-postings';
  const response = await fetch(backendEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formattedJobPostings),
  });

  if (response.ok) {
    console.log('Job postings successfully sent to the backend');
  } else {
    console.error('Failed to send job postings to the backend:', response.status, response.statusText);
  }

  // Close the browser
  await browser.close();
})();