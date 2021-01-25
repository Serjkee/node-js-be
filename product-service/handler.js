'use strict';
const productList = require('./productList.json');

module.exports.getProductsList = async event => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(productList),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(productList),
  }
  }
};

module.exports.getProductById = async event => {
  try {
    const requestedProductId = event.pathParameters.productId;
    const requestedProduct = productList.find(product => requestedProductId === product.id);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: requestedProduct ? JSON.stringify(requestedProduct) : 'No product found',
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(productList),
  }
  }
};
