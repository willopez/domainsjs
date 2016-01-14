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

const User = Connection.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

const Domain = Connection.define('domain', {
  domain: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Relationships
User.hasMany(Domain);
Domain.belongsTo(User);

// Seed database
Connection.sync({force: true}).then(() => {
  _.times(1, () => {
    return User.create({
      username: Faker.internet.userName(),
      email: Faker.internet.email()
    }).then(person => {
      _.times(7, () => {
        return person.createDomain({
          domain: Faker.internet.domainWord() + '.com'
        });
      });
    });
  });
});

export default Connection;
