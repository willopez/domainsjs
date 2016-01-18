import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {
  domainQueries,
  recordQueries,
} from './queries';

import {
  updateWhoisPrivacy
} from './mutations';


const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    domain: domainQueries,
    record: recordQueries
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    updateWhoisPrivacyMutation: updateWhoisPrivacy,
  })
});

const Schema = new GraphQLSchema({
  query: queryType,
  mutation: Mutation
});

export default Schema;
