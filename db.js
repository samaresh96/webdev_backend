import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,  // important for Docker
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432
});

export default pool;
