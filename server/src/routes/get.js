import express from 'express';

import productsController from '../controllers/products';
import productsValidator from '../validators/products'

const route = express.Router();
const { getSpecificProduct, getAllProducts } = productsController;
const { validateRouteId } = productsValidator;

route.get('/:productId', validateRouteId, getSpecificProduct)
route.get('/', getAllProducts);

export default route;
