import '@babel/polyfill';
import productsQuery from '../db/products'

const { insertProducts, getProduct } = productsQuery;

export default {
    createProducts: async (request, response, next) => {
        try {
            const { body } = request;

            body.image = (request.file) ?
                request.file.secure_url : null;

            const result = await insertProducts(body);
            if (typeof result === 'string') {
                const error = new Error(result);
                error.status = 404;
                throw error;
            }

            const { rows } = result;

            return response.status(200).json({
                status: 200,
                data: rows[0]
            })
        } catch (err) {
            next(err);
        }
    },
    getSpecificProduct: async (request, response, next) => {
        try {
            const { params: { productId } } = request;
            const result = await getProduct(productId);

            if (typeof result === 'string') {
                const error = new Error(result);
                error.status = 400;
                throw error;
            }

            const { rows } = result;

            return response.status(200).json({
                status: 200,
                data: rows[0] || []
            });
        } catch (error) {
            next(error);
        }
    }
}
