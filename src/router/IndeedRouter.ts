import e from 'express';
import {IndeedFetcher} from '../data/fetching';
import {IndeedExtractor} from '../data/extractor';

const defaultMaxPage = 10;

const fetcher = new IndeedFetcher();
const extractor = new IndeedExtractor();

const router = e.Router();

router.get('/', async (req, res) => {
  const maxPage = Number(req.query.page_size ?? defaultMaxPage);
  fetcher.setMaxPage(maxPage);

  const data = await fetcher.fetchMany();
  const isComplete = data.length >= maxPage;
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
