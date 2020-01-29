import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import routes from './routes';
import migrateDb from './db/migration/index';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes);

app.use('/api/*', (req, res) => {
  res.status(404).json({ status: 404, message: 'page not found' });
});

app.use(express.static(path.resolve(__dirname, '../../client/', 'public')));

app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../client/public/', 'index.html'));
});

app.use((err, req, res, next) => {
  let status = 500;
  if (err.status) status = err.status;
  res.status(status).json({
    status,
    message: err.message,
  });
});

migrateDb();

app.listen(8080, () => console.log('listening'));
