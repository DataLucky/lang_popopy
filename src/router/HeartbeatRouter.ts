import e from 'express';

const router = e.Router();

router.get('/ping', (_, res) => {
  res.end('pong!');
});

export const HeartbeatRouter = router;
