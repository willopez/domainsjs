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
  expiring_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  registered_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  name_server: {
    type: Sequelize.STRING,
    allowNull: false
  },
  private_whois: {
    type: Sequelize.BOOLEAN,
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

// Relationship
Domain.hasMany(Record);
Record.belongsTo(Domain);

// Seed database
Connection.sync({ force: true }).then(() => {
  _.times(10, () => {
    return Domain.create({
      name: Faker.internet.domainName(),
      expiring_date: Faker.date.future(),
      registered_date: Faker.date.future(),
      name_server: 'Uniregistry',
      private_whois: false
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
