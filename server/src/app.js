import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';
import migrateDb from './db/migration/index';

dotenv.config()

const app = express();
app.use('/api/v1', routes);

migrateDb();

app.listen(8080, () => console.log('listening'));
