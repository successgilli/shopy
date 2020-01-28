import express from 'express'

import productsController from '../controllers/products';
import productsValidator from '../validators/products';
import imageupload from '../config/imageUpload';

const { createProducts } = productsController;
const { validateCreateProducts } = productsValidator;

const route = express.Router();

route.post('/', imageupload.single('image'), validateCreateProducts, createProducts);

export default route
