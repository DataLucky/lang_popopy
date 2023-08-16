import {retryOnError} from './retryer';

export interface BatchFetch<T> {
  fetchMany(q?: string): Promise<T[]>;
  isEnd(): boolean;
  getData(): T[];
  getPage(): number;
  setMaxPage(page: number): void;
}

const defaultQuery = 'developer';

export abstract class BaseBatchFetcher<T = string> implements BatchFetch<T> {
  protected _page: number;
  protected _url: string;
  protected _data: T[];

  constructor(protected maxPage: number = 10) {
    this._page = 0;
    this._data = [];
  }

  abstract doFetch(q?: string): Promise<T>;
  abstract doAppend(data: T | Record<string, T>): void;

  async fetchMany(q: string = defaultQuery): Promise<T[]> {
    while (this._page < this.maxPage) {
      try {
        console.log('[TRACE] page(', this._page, ')');
        const res = await retryOnError(() => this.doFetch(q));
        this.doAppend(res.data);
        this._page++;
      } catch (e) {
        console.log(e.message);
        return this._data;
      }
    }
    this._page = 0;
    return this._data;
  }

  isEnd(): boolean {
    return this._page >= this.maxPage;
  }

  getData(): T[] {
    return this._data;
  }

  getPage(): number {
    return this._page;
  }

  setMaxPage(page: number): void {
    this.maxPage = page;
  }
}
