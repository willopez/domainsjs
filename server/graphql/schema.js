import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {
  userQueries,
  domainQueries
} from './queries';
// import mutations from '../mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => {
    return {
      user: userQueries,
      domain: domainQueries
    };
  }
});

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   description: 'Mutations'
//   fields: () => {
//     return {
//       mutations
//     };
//   }
// });

const Schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation
});

export default Schema;
