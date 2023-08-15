import e from 'express';

const app = e();

const defaultPort = 8080;

app.listen(process.env.PORT || defaultPort, () => {
  console.log('Application listening...');
});
