import express from 'express'

const route = express.Router();

route.post('/', (request, response) => response.send('get products'));

export default route
