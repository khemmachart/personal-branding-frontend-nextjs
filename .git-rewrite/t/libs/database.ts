import { Pool, PoolConfig, PoolClient } from "pg";

let pool: Pool | null = null;

function createPool(): Pool {
  const config: PoolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL === 'true'
      ? { rejectUnauthorized: false }
      : false,
    max: parseInt(process.env.DB_MAX_CLIENTS || '20', 10), 
    idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT_MS || '30000', 10),
    connectionTimeoutMillis: parseInt(process.env.DB_CONNECTION_TIMEOUT_MS || '2000', 10),
  };

  const newPool = new Pool(config);

  newPool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
  });

  return newPool;
}

function initializePool() {
  if (!pool) {
    pool = createPool();
    pool.connect((err, client, release) => {
      if (err) {
        console.error('Error acquiring client', err.stack);
        console.error('Database connection failed. Check your environment variables and network connection.');
      } else {
        client.query('SELECT NOW()', (queryErr, result) => {
          release();
          if (queryErr) {
            console.error('Test query failed:', queryErr);
          } else {
            console.log('Database connection established. Current time:', result.rows[0].now);
          }
        });
      }
    });
  }
}

initializePool();

/**
 * Executes a database query using the provided SQL text and parameters.
 * 
 * @param {string} text - The SQL query text.
 * @param {any[]} [params] - Optional array of parameters for the SQL query.
 * @returns {Promise<any>} - A promise that resolves to the query result.
 */
export const query = async (text: string, params?: any[]): Promise<any> => {
  if (!pool) {
    throw new Error('Database pool not initialized');
  }
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  } finally {
    client.release();
  }
};

/**
 * Retrieves a client from the connection pool.
 * 
 * @returns {Promise<PoolClient>} - A promise that resolves to a PoolClient instance.
 */
export const getClient = async (): Promise<PoolClient> => {
  if (!pool) {
    throw new Error('Database pool not initialized');
  }
  return await pool.connect();
};

export default pool;