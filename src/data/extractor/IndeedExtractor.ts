import {Cheerio, AnyNode, Element} from 'cheerio';
import {BaseExtractor} from './Extractor';
import {cn} from './util';
import {Job} from '../../model/IndeedModel';

const CLS = {
  list: '.jobsearch-ResultsList',
  jobTitle: '.jobTitle',
  company: {
    name: '.companyName',
    location: '.companyLocation',
  },
  salary: cn('.metadataContainer', '.metadata:nth-child(1)'),
  type: cn('.metadataContainer', '.metadata:nth-child(2)'),
  metadata: {
    date: cn('.jobCardShelfContainer', '.date'),
    description: cn('.result-footer', 'ul'),
  },
};

export class IndeedExtractor extends BaseExtractor<Job> {
  override extract(): Job[] {
    const list = this.extractJobList();

    const jobs = [];

    this.forEachJobElement(list, (el) => {
      jobs.push(this.extractJobInformation(el));
    });

    return jobs;
  }

  private forEachJobElement(
    list: Cheerio<AnyNode>,
    cb: (el: Cheerio<Element>, index: number) => void
  ) {
    const jobs = list.children();
    for (let i = 0; i < jobs.length; i++) {
      const job = this._$(jobs[i]);
      cb(job, i);
    }
  }

  private extractJobInformation(el: Cheerio<Element>): Job {
    return {
      title: el.find(CLS.jobTitle).text(),
      company: {
        name: el.find(CLS.company.name).text(),
        location: el.find(CLS.company.location).text(),
      },
      salary: el.find(CLS.salary).text(),
      type: el.find(CLS.type).text(),
      posted: el.find(CLS.metadata.date).text(),
      descriptions: el
        .find(CLS.metadata.description)
        .text()
        .trim()
        .split('\n')
        .map((_) => _.trim()),
    };
  }

  private extractJobList() {
    return this._$(CLS.list);
  }
}
