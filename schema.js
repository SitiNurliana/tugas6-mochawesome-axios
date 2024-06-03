export const dummyGetSchema = {
    type: 'object',
    required: ['id', 'title', 'description', 'category', 'price', 'discountPercentage', 'rating'],
    properties: {
        id: {type: 'number'},
        title: {type: 'string'},
        description: {type: 'string'},
        category: {type: 'string'},
        price: {type: 'number'},
        discountPercentage: {type: 'number'},
        rating: {type: 'number'}

    }
}

export const dummyPostSchema = {
    type: 'object',
    required: ['id', 'title'],
    properties: {
        id: {type: 'number'},
        title: {type: 'string'}    }
}

export const dummyPutSchema = {
    type: 'object',
    required: ['id', 'title'],
    properties: {
        id: {type: 'number'},
        title: {type: 'string'}    }
}

export const dummyDeleteSchema = {
    type: 'object',
    properties: {}
}