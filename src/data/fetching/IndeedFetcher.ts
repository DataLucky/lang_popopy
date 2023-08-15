import {indeedUrl} from '../../config/urls';
import {BaseBatchFetcher} from './BatchFetch';

export class IndeedFetcher extends BaseBatchFetcher {
  override defineUrlMetadata(q: string) {
    this._url = indeedUrl(q, this._page * 10); // indeed pagination goes 10 step every each
  }
}
