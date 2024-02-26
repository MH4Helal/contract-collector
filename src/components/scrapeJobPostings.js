const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  const response = await axios.get('https://example.com/job-postings');
  const html = response.data;
  const $ = cheerio.load(html);
  const jobPostings = [];
  
  const contractKeywords = ['contract', 'freelance', 'temporary'];
  $('.job-posting').each((index, element) => {
    const title = $(element).find('.title').text().toLowerCase();
    const description = $(element).find('.description').text().toLowerCase();
    if (contractKeywords.some(keyword => title.includes(keyword) || description.includes(keyword))) {
      jobPostings.push({
        title: title,
        location: $(element).find('.location').text(),
        description: description,
        // Add more fields as needed
      });
    }
  });

  // Output the job postings in a suitable format for your backend integration
})();