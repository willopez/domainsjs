import {Router} from 'express';
import {graphql} from 'graphql';

import generateHtml from '../util/generate-html';
import routeHandler from '../../shared/util/route-handler';
import routes from '../../shared/routes/public';
import schema from '../graphql/schema';
import {getMainView as getMainViewType} from '../../client/actions/types'

const publicRouter = new Router();

publicRouter.get('/', (req, res, next) => {
  routeHandler(routes, req, res, next);
});

publicRouter.use('/', async (req, res, next) => {

  var query = `
       query domainQuery {
          domain
          {
          	id
            name
            private_whois
            record {
              hostname
              ttl
              type
              ip_address
            }
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
