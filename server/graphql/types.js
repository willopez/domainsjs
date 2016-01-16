import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'Represents a user',
  fields: () => ({
      id: {
        type: GraphQLInt,
        resolve(user) {
          return user.id;
        }
      },
      username: {
        type: GraphQLString,
        resolve(user) {
          return user.username;
        }
      },
      domains: {
        type: new GraphQLList(Domain),
        resolve(user) {
          return user.getDomains();
        }
      }
  })
});

const Domain = new GraphQLObjectType({
  name: 'Domain',
  description: 'Represennts a domain name',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(domain) {
          return domain.id;
        }
      },
      domain: {
        type: GraphQLString,
        resolve(domain) {
          return domain.domain;
        }
      },
      user: {
        type: User,
        resolve(domain) {
          return domain.getUser();
        }
      }
    };
  }
});

export {
  User,
  Domain
};
