import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean
} from 'graphql';


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
      name: {
        type: GraphQLString,
        resolve(domain) {
          return domain.name;
        }
      },
      private_whois: {
        type: GraphQLBoolean,
        resolve(record) {
          return record.private_whois;
        }
      },
      record: {
        type: new GraphQLList(Record),
        resolve(domain) {
          return domain.getRecords();
        }
      }
    };
  }
});

const Record = new GraphQLObjectType({
  name: 'Record',
  description: 'Represents a domain record.',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve(record) {
        return record.id;
      }
    },
    hostname: {
      type: GraphQLString,
      resolve(record) {
        return record.hostname;
      }
    },
    ttl: {
      type: GraphQLInt,
      resolve(record) {
        return record.ttl;
      }
    },
    type: {
      type: GraphQLString,
      resolve(record) {
        return record.type;
      }
    },
    ip_address: {
      type: GraphQLString,
      resolve(record) {
        return record.ip_address;
      }
    },
  })
});

export {
  Domain,
  Record
};
