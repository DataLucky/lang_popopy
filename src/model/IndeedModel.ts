// Note that none of these props have been processed and requires you to do some transformation.
// Only then can they be fully usable.

export interface Company {
  name: string;
  location: string;
}

export interface Job {
  id: string;
  title: string;
  company: Company;
  salary: string;
  type: string;
  posted: string;
  descriptions: string[];
}
