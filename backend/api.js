// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { scrapeJobPostings } = require('./scraper'); // Import the web scraper
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/scrape-and-process', async (req, res) => {
  try {
    const jobPostings = await scrapeJobPostings(); // Scrape the job postings
    // Process the job postings, e.g., save them to a database
    console.log('Received job postings:', jobPostings);
    res.status(200).json({ message: 'Job postings received and processed.', data: jobPostings });
  } catch (error) {
    console.error('Error scraping job postings:', error);
    res.status(500).json({ message: 'Error scraping job postings' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});