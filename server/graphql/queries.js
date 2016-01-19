import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import DB from '../db/db';
import {
  Domain,
  Record
} from './types';


const domainQueries = {
  type: new GraphQLList(Domain),
  args: {
    id: {
      description: 'id of the domain',
      type: GraphQLString
    }
  },
  resolve: (root, args)  => DB.models.domain.findAll({ where: args, order: 'name ASC' })
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
