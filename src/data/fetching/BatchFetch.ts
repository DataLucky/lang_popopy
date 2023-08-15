import {wrappedFetch} from './util';

export interface BatchFetch {
  fetchMany(q?: string): Promise<string[]>;
  isEnd(): boolean;
  getData(): string[];
  getPage(): number;
}

const defaultQuery = 'developer';

export abstract class BaseBatchFetcher {
  protected _page: number;
  protected _url: string;
  protected _data: string[];

  constructor(protected readonly maxPage: number = 10) {
    this._page = 0;
    this._data = [];
  }

  abstract defineUrlMetadata(q: string): void;

  async fetchMany(q: string = defaultQuery): Promise<string[]> {
    while (this._page < this.maxPage) {
      this.defineUrlMetadata(q);

      console.log('[TRACE] (page', this._page, ')');

      const res = await wrappedFetch(this._url);

      this._data.push(res.data);
      this._page++;
    }
    return this._data;
  }

  isEnd(): boolean {
    return this._page >= this.maxPage;
  }

  getData(): string[] {
    return this._data;
  }

  getPage(): number {
    return this._page;
  }
}
