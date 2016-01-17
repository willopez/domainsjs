import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

const Connection = new Sequelize(
  'domains',  // Database name
  'root',     // User name
  'root',     // Password
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

const Domain = Connection.define('domain', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  private_whois: {
    type: Sequelize.BOOLEAN,
  },
  updated: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

const Record = Connection.define('record', {
  hostname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ttl: {
    type: Sequelize.INTEGER,
    defaultVaule: 300
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ip_address: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

// Relationships
Domain.hasMany(Record);
Record.belongsTo(Domain);

// Seed database
Connection.sync({ force: true }).then(() => {
  _.times(10, () => {
    return Domain.create({
      name: Faker.internet.domainName(),
      private_whois: false,
      updated: Faker.date.future()
    }).then(domain => {
      _.times(2, () => {
        return domain.createRecord({
          hostname: Faker.internet.domainWord() + '.' + domain.name,
          ttl: 300,
          type: 'A',
          ip_address: Faker.internet.ip()
        });
      });
    });
  });
});

export default Connection;
