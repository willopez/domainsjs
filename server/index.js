import path from 'path';
import express from 'express';
import webpack from 'webpack';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import graphQLHTTP from 'express-graphql';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.js';
import routers from './routers';
import Schema from './graphql/schema';

const app = express();

// GraphQL middleware
app.use('/graphql', graphQLHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

// Logger
app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: 100000000}));

if (app.get('env') === 'development') {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '../public')));

app.use(routers.publicRouter);

app.use((req, res, next) => {
  res.status(404).end();
});

app.use((error, req, res) => {
  const statusCode = error.statusCode || 500;
  const err = {
    error: statusCode,
    message: error.message
  };
  console.log(err);

  if (!res.headerSet) {
    res.status(statusCode).send(err);
  }
});

export default app;
