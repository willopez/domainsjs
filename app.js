import app from './server';

const port = process.env.NODE_ENV !== 'production' ? 3000 : 3000;

const server = app.listen(port, () => {
  console.log('Listening on port: ' + server.address().port);
});
