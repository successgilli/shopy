let errors = {};

const improperVals = (request) => {
    const {
        name,
        description,
        price,
        category,
        color
    } = request;

    if ('name' in request && (!/^[a-zA-Z ]{5,}$/.test(name.trim()))) {
        errors.name = 'Invalid product name';
    }
    if ('description' in request && (!/^[a-zA-Z .']{5,}$/.test(description.trim()))) {
        errors.description = 'description too short (<5) or contains invalid character';
    }
    if ('category' in request && (!/^[a-zA-Z .']{5,}$/.test(category.trim()))) {
        errors.category = 'category too short (<5) or contains invalid character';
    }
    if ('color' in request && (!/^[a-zA-Z]{3,}$/.test(color.trim()))) {
        errors.color = 'color must be a valid string not less than 3 characters';
    }
    if ('price' in request && (!/^[0-9.]{2,}$/.test(price.trim()))) {
        errors.price = 'invalid price';
    }
}

export default {
    validateCreateProducts: (req, res, next) => {
        try {
            const values = [
                'name',
                'category',
                'color',
                'price',
                'description',
            ]
            const required = [
                'name',
                'category',
                'color',
                'price',
                'description',
            ];
            improperVals(req.body);
            values.forEach(field => {
                if ((!(field in req.body)) && (required.includes(field))) {
                    errors[field] = `${field} field is required`;
                }
            })
            if (Object.keys(errors).length) {
                const error = new Error('invalid input');
                error.message = errors;
                error.status = 400;
                throw error;
            }
            errors = {};
            next();
        } catch (error) {
            errors = {};
            next(error);
        }
    },
    validateRouteId: (request, response, next) => {
        try {
            const { params: { productId } } = request;
            const uuidRegex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

            if(!(uuidRegex.test(productId))) {
                const error = new Error('Invalid product Id');
                error.status = 400;
                throw error;
            }

            next();
        } catch (error) {
            next(error)
        }
    }
}
