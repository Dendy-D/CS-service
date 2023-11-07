import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST_NAME?.replace(/"/g, ''),
  user: process.env.DB_USERNAME?.replace(/"/g, ''),
  password: process.env.DB_PASSWORD?.replace(/"/g, ''),
  port: Number(process.env.DB_PORT_NAME),
  database: process.env.DB_NAME?.replace(/"/g, ''),
});

export default pool;
