import express from 'express';

import post from './post';

const route = express.Router();

route.use('/products', post)

export default route;
