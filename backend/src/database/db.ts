import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST_NAME,
  port: process.env.DB_PORT_NAME as number | undefined,
  database: process.env.DB_NAME,
});

export default pool;
