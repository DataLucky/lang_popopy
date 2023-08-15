import {CheerioAPI, load} from 'cheerio';

export interface Extractor<TResult> {
  extract(): TResult[];
}

export abstract class BaseExtractor<TResult = any> implements Extractor<TResult> {
  protected _$: CheerioAPI;

  constructor(protected readonly text: string) {
    this._$ = load(text);
  }

  abstract extract(): TResult[];
}
