import '@babel/polyfill';
import db from './index';

export default {
    insertProducts: async (product) => {
        try {
            const {
                name,
                description,
                price,
                category,
                color,
                image
            } = product;
            const text = `INSERT INTO products (name, description, price, category, image, color) values($1,$2,$3,$4,$5,$6) returning *`;
            const params = [name, description, price, category, image, color];
            const result = await db.query(text, params);

            return result;
        } catch (error) {
            if (error.message === 'duplicate key value violates unique constraint "products_name_key"') {
                return 'product name already exist'
            }
            return error.message;
        }
    },
    getProduct: async (productId) => {
        try {
            const text = 'SELECT * FROM products where id = $1';
            const param = [productId.trim()];
            const result = await db.query(text, param);

            return result;
        } catch (error) {
            return error.message;
        }
    }
}