require('ts-node/register');
const {
  INSERT_DB_NAME_DB_HOST,
  INSERT_DB_NAME_DB_PORT,
  INSERT_DB_NAME_DATABASE,
  INSERT_DB_NAME_DB_USER,
  INSERT_DB_NAME_DB_PASSWORD,
  INSERT_DB_NAME_MIGRATION_DIRECTORY,
  INSERT_DB_NAME_SEED_DIRECTORY,
  INSERT_DB_NAME_DB_SUFFIX,
} = require('../config.ts');

const connection = {
  host: INSERT_DB_NAME_DB_HOST,
  port: INSERT_DB_NAME_DB_PORT,
  user: INSERT_DB_NAME_DB_USER,
  password: INSERT_DB_NAME_DB_PASSWORD,
};

const config = {
  client: 'pg',
  connection,

  migrations: {
    directory: INSERT_DB_NAME_MIGRATION_DIRECTORY,
  },

  seeds: {
    directory: INSERT_DB_NAME_SEED_DIRECTORY,
  },

  pool: {
    min: 0,
    max: 10,
  },

};

module.exports = {
  development: {
    ...config,

    connection: {
      ...connection,
      database: `devel_${INSERT_DB_NAME_DB_SUFFIX}`,
    },

    debug: true,
  },

  production: {
    ...config,

    connection: {
      ...connection,
      database: `devel_${INSERT_DB_NAME_DB_SUFFIX}`,
    },
  },
}
