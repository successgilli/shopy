import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({connectionString: process.env.DATABASE_URL_DEV})

export default {
    query: (text, params) => pool.query(text, params),
  }
