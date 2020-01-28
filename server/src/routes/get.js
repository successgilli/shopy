import express from 'express';

import productsController from '../controllers/products';
import productsValidator from '../validators/products'

const route = express.Router();
const { getSpecificProduct } = productsController;
const { validateRouteId } = productsValidator;

route.get('/:productId', validateRouteId, getSpecificProduct)

export default route;
