import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {
  userQueries,
  domainQueries
} from './queries';
// import mutations from '../mutations';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
      user: userQueries,
      domain: domainQueries
  })
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
  query: queryType,
  // mutation: Mutation
});

export default Schema;
