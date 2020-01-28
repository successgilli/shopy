import express from 'express';

import post from './post';
import get from './get';

const route = express.Router();

route.use('/products', post)
route.use('/products', get)

export default route;
