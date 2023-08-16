import e from 'express';
import {IndeedRouter} from './router';

const defaultPort = 8080;
const app = e();

app.use(e.json());
app.use('/indeed', IndeedRouter);

app.listen(process.env.PORT || defaultPort, () => {
  console.log('Application listening...');
});
