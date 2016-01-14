import {Router} from 'express';

import generateHtml from '../util/generate-html';
import routeHandler from '../../shared/util/route-handler';
import routes from '../../shared/routes/public';

const publicRouter = new Router();

publicRouter.get('*', (req, res, next) => {
  routeHandler(routes, req, res, next);
});


// TODO: Add error checking
publicRouter.use((req, res, next) => {
  res.status(200).send(generateHtml(req.store, res));
});

export default publicRouter;
