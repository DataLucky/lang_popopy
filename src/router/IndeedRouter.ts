import e from 'express';
import {IndeedFetcher} from '../data/fetching';
import {IndeedExtractor} from '../data/extractor';

const MAX_PAGE = 5;

const fetcher = new IndeedFetcher(MAX_PAGE);
const extractor = new IndeedExtractor();

const router = e.Router();

router.get('/', async (_, res) => {
  const data = await fetcher.fetchMany();
  const isComplete = data.length === MAX_PAGE;
  const retrieved = extractor.reset(data).extract();
  res.end(
    JSON.stringify({
      partial: !isComplete,
      total: retrieved.length,
      data: retrieved,
    })
  );
});

export const IndeedRouter = router;
