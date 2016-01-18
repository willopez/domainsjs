import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import DB from '../db/db';
import {
  Domain,
  Record
} from './types';


const domainQueries = {
  type: new GraphQLList(Domain),
  resolve: (root, args)  => DB.models.domain.findAll({where: args, order: 'id ASC' })
};

const recordQueries =  {
  type: new GraphQLList(Record),
  args: {
    id: {
      type: GraphQLInt,
    },
    hostname: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => DB.models.record.findAll({where: args})
};

export {
  domainQueries,
  recordQueries
};
