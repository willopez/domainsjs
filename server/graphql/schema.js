import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {
  domainQueries,
  recordQueries,
} from './queries';
// import mutations from '../mutations';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
      domain: domainQueries,
      record: recordQueries
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
