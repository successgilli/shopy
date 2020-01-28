import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';
import migrateDb from './db/migration/index';

dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', routes);
app.use(function (err, req, res, next) {
    let status = 500;
    if(err.status) status = err.status;
    res.status(status).json({
      status,
      message: err.message
    })
  })

migrateDb();

app.listen(8080, () => console.log('listening'));
