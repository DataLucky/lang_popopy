import e from 'express';
import { StackoverflowFetcher } from '../data/fetching/StackoverflowFetcher';

const MAX_PAGE = 10;

const fetcher = new StackoverflowFetcher(MAX_PAGE);

const router = e.Router();

router.get('/', async (_, res) => {
  const data = await fetcher.fetchMany();
  res.end(
    JSON.stringify({
      partial: false,
      total: data.length,
      data: data,
    })
  );
});

export const StackoverflowRouter = router;
