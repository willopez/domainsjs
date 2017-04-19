# DomainsJS

A simple application to manage domain names.

# Installation
```
npm install
```

A MYSQL database named domains will be necessary. Refer to `server/db/db.js` for database configuration.

## Directory Structure

```
client/                  // client side components
  actions/               // action creators
  util/                  // client side utilities
  main.js                // client application entry point
public/                  // webpack output directory
  css/
  fonts/
  images/
  js/
server/
  db/                     // database connection and models
  graphql/                // graphql configuration
  routers/                // express routers
  util/                   // server utilities
shared/                   // shared resources between client and server
  components              // react components
  containers              // higher order components
  reducers                // Redux reducers
  routes                  // react router route definitions
  util                    // shared utilities
test/                      
  components              // component test files
```

# Running in development mode
In development mode, hot module replacement in enabled for a better development
experience.
```
npm run dev
open http://localhost:3000
```

# Running tests
mochajs is used as the testing framework.
```
npm test
```

# Running in production mode
```
npm run build
npm start
open http://localhost:3000
```

# Screenshots
![Alt text](/public/images/domains.png?raw=true "Main view")
![Alt text](/public/images/reports.png?raw=true "Details view")
