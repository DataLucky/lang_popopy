import {CheerioAPI, load} from 'cheerio';

export interface Extractor<TResult> {
  extract(): TResult[];

  reset(input: string): this;
}

export abstract class BaseExtractor<TResult = any> implements Extractor<TResult> {
  protected _$: CheerioAPI;

  constructor(protected readonly input: string) {
    this._$ = load(input);
  }

  reset(input: string) {
    this._$ = load(input);
    return this;
  }

  abstract extract(): TResult[];
}
