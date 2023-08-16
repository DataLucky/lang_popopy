import {SCRAPING_DOG_API_KEY} from './env';

export const createScrapingDogUrl = (url: string) =>
  `https://api.scrapingdog.com/scrape?api_key=${SCRAPING_DOG_API_KEY}&url=${url}`;

export const indeedUrl = (q: string, pageFrom: number = null) => {
  let uri = `https://www.indeed.com/jobs?q=${encodeURI(q)}`;
  if (pageFrom != null) {
    uri += `&start=${pageFrom}`;
  }
  return uri;
};

export const PAGE_SIZE = 50;

export const stackoverflowUrl = (page: number) =>
  `https://api.stackexchange.com/2.3/questions?page=${page}&pagesize=${PAGE_SIZE}&order=desc&sort=activity&site=stackoverflow`;
