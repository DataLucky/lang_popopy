import {SCRAPING_DOG_API_KEY} from './env';

export const createScrapingDogUrl = (url: string) =>
  `https://api.scrapingdog.com/scrape?api_key=${SCRAPING_DOG_API_KEY}&url=${url}`;

export const indeedUrl = (q: string) =>
  `https://www.indeed.com/jobs?q=${encodeURI(q)}&l=&vjk=e7b930755e7c9bdc&dynamic=false`;
