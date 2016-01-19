import { Router } from 'express';
import { graphql } from 'graphql';

import generateHtml from '../util/generate-html';
import routeHandler from '../../shared/util/route-handler';
import routes from '../../shared/routes/main';
import schema from '../graphql/schema';
import * as actionTypes from '../../client/actions/types';

const publicRouter = new Router();

publicRouter.get('/*', (req, res, next) => {
  routeHandler(routes, req, res, next);
});

publicRouter.use('/domain/:id', async (req, res) => {

  const query = `
    query domainDetailQuery($id: String!) {
      domain(id: $id) {
      	id
        name
        expiring_date
        name_server
        private_whois
        record {
          id
          hostname
          ttl
          type
          ip_address
        }
      }
    }
  `;

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
    ...data
  });

  res.status(200).send(generateHtml(req.store, res));
});

publicRouter.use('/', async (req, res) => {
  const query = `
    query domainQuery {
      domain
      {
      	id
        name
        expiring_date
        registered_date
        name_server
        private_whois
      }
    }
  `;

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
    ...data
  });

  res.status(200).send(generateHtml(req.store, res));
});


export default publicRouter;
