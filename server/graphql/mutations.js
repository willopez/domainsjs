import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import DB from '../db/db';
import {
  Domain,
} from './types';

const updateWhoisPrivacy = {
  type: Domain,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    private_whois: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  },
  resolve(_, args) {
    return DB.models.domain.update(
      { private_whois: args.private_whois },
      { where: { id: parseInt(args.id, 10) } }
    ).then((success) => {
      console.log(success);
      return DB.models.domain.findOne(
        { where: { id: parseInt(args.id, 10) } },
      );
    });
  },
};

export {
  updateWhoisPrivacy,
};
