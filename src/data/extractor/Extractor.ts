import {CheerioAPI} from 'cheerio';

export interface Extractor<TResult> {
  extract(): TResult[];
  reset(data: string[]): this;
}

export abstract class BaseExtractor<TResult = any> implements Extractor<TResult> {
  protected _$: CheerioAPI;

  constructor(...data: string[]) {
    this.initHtmlTree(data);
  }

  reset(data: string[]) {
    this.initHtmlTree(data);
    return this;
  }

  abstract initHtmlTree(data: string[]): void;

  abstract extract(): TResult[];
}
