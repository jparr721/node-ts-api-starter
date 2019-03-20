import { hostname } from 'os';

export const NODE_PORT = process.env.NODE_PORT || 3200;

export const INSERT_DB_NAME_DB_HOST = process.env.INSERT_DB_NAME_DB_HOST || '127.0.0.1';
export const INSERT_DB_NAME_DB_PORT = process.env.INSERT_DB_NAME_DB_PORT || '5432';
export const INSERT_DB_NAME_DATABASE = process.env.INSERT_DB_NAME_DATABASE || 'INSERT_DB_NAME';
export const INSERT_DB_NAME_DB_USER = process.env.INSERT_DB_NAME_DB_USER || 'postgres';
export const INSERT_DB_NAME_DB_PASSWORD = process.env.INSERT_DB_NAME_DB_PASSWORD || hostname();
export const INSERT_DB_NAME_MIGRATION_DIRECTORY = `${__dirname}/migrations`;
export const INSERT_DB_NAME_SEED_DIRECTORY = `${__dirname}/seeds`;
export const INSERT_DB_NAME_DB_SUFFIX = process.env.INSERT_DB_NAME_DB_SUFFIX || 'INSERT_DB_NAME';

// Table names
export const TABLE_NAME_USER     = 'user';
