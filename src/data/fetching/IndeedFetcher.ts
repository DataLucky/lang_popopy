import {indeedUrl} from '../../config/urls';
import {BaseBatchFetcher} from './BatchFetch';
import {wrappedFetch} from './util';

export class IndeedFetcher extends BaseBatchFetcher {
  override doFetch(q?: string): Promise<string> {
    // indeed pagination goes 10 step every each
    return wrappedFetch(indeedUrl(q, this._page * 10));
  }

  override doAppend(data: string): void {
    this._data.push(data);
  }

  initMetadata(): void {
    super.defaultInitMetadata();
    this._page = 0;
  }
}
