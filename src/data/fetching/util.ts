import req from 'axios';
import {createScrapingDogUrl} from '../../config/urls';

export function wrappedFetch<T = any>(url: string) {
  const siteUrl = createScrapingDogUrl(url);
  return req.get<any, T>(siteUrl);
}
