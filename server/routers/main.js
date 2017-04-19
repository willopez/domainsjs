import { Router } from 'express';
import { graphql } from 'graphql';

import generateHtml from '../util/generate-html';
import routeHandler from '../../shared/util/route-handler';
import routes from '../../shared/routes/main';
import schema from '../graphql/schema';
import * as actionTypes from '../../client/actions/types';
import Connection from '../db/db';
import { processStats } from '../util/utils';

const publicRouter = new Router();

publicRouter.get('/*', (req, res, next) => {
  routeHandler(routes, req, res, next);
});

publicRouter.use('/domain/:id', async (req, res) => {
  const DomainDetailContainer = req.renderProps.components[0];
  const query = DomainDetailContainer.getQuery();

  let data;
  try {
    data = await graphql(
      schema,
      query,
      null,
      { id: req.params.id }
    );
  } catch (e) {
    console.log(e);
  }

  req.store.dispatch({
    type: actionTypes.getDomainDetail,
    ...data,
  });

  res.status(200).send(generateHtml(req.store, res));
});

publicRouter.use('/reports', async (req, res) => {

  const totalCount = await Connection.query('SELECT COUNT(*) as count FROM domains');
  const stats = await Connection.query('SELECT  tld, count(tld) as count FROM domains GROUP BY tld');

  const data = processStats(totalCount[0][0].count, stats[0]);

  req.store.dispatch({
    type: actionTypes.getDomainStats, data,
  });

  res.status(200).send(generateHtml(req.store, res));
});

publicRouter.use('/', async (req, res) => {
  // Get query to construct the data dependecies of this component.
  const MainViewContainer = req.renderProps.components[0];
  const query = MainViewContainer.getQuery();

  let data;
  try {
    data = await graphql(
      schema,
      query
    );
  } catch (e) {
    console.log(e);
  }

  req.store.dispatch({
    type: actionTypes.getMainView,
    ...data,
  });

  res.status(200).send(generateHtml(req.store, res));
});


export default publicRouter;
