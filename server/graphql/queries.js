import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import DB from '../db/db';
import {
  User,
  Domain
} from './types';

const userQueries =  {
  type: new GraphQLList(User),
  args: {
    id: {
      type: GraphQLInt,
    },
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => DB.models.user.findAll({where: args})
};

const domainQueries = {
  type: new GraphQLList(Domain),
  resolve: (root, args)  => DB.models.domain.findAll({where: args})
};

export {
  userQueries,
  domainQueries
};
