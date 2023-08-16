import {stackoverflowUrl} from '../../config/urls';
import {BaseBatchFetcher} from './BatchFetch';
import req from 'axios';

export class StackoverflowFetcher extends BaseBatchFetcher<object /* TODO: better typings for this */> {
  constructor(readonly maxPage: number = null) {
    super(maxPage);
    this._page = 1;
  }

  override doFetch(): Promise<object> {
    console.log('>', stackoverflowUrl(this._page));
    return req.get(stackoverflowUrl(this._page));
  }

  override doAppend(data: Record<string, object[]>): void {
    this._data.push(...data.items);
  }

  initMetadata(): void {
    super.defaultInitMetadata();
  }
}
