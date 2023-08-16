import e from 'express';
import {StackoverflowFetcher} from '../data/fetching/StackoverflowFetcher';

const defaultMaxPage = 10;

const fetcher = new StackoverflowFetcher();

const router = e.Router();

router.get('/', async (req, res) => {
  fetcher.setMaxPage(Number(req.query.page_size ?? defaultMaxPage));

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
