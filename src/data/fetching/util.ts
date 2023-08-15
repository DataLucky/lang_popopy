import req from 'axios';
import {createScrapingDogUrl} from '../../config/urls';

export function wrappedFetch(url: string) {
  const siteUrl = createScrapingDogUrl(url);
  return req.get(siteUrl);
}
