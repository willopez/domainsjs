import {Router} from 'express';
import {graphql} from 'graphql';

import generateHtml from '../util/generate-html';
import routeHandler from '../../shared/util/route-handler';
import routes from '../../shared/routes/main';
import schema from '../graphql/schema';
import {getMainView as getMainViewType} from '../../client/actions/types'

const publicRouter = new Router();

publicRouter.get('/*', (req, res, next) => {
  routeHandler(routes, req, res, next);
});

publicRouter.use('/domain/:id', async (req, res) => {

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

  const data = await graphql(
    schema,
    query
  );

  await req.store.dispatch({
    type: getMainViewType,
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

  const data = await graphql(
    schema,
    query
  );

  await req.store.dispatch({
    type: getMainViewType,
    ...data
  });

  res.status(200).send(generateHtml(req.store, res));
});


export default publicRouter;
