const localhost = "http://127.0.0.1:8000";

const apiUrl = '/api';

export const endpoint = `${localhost}${apiUrl}`;

export const productListUrl = `${endpoint}/product-list/`;
export const addToCartURL = `${endpoint}/add-to-cart/`;
export const orderSummaryURL = `${endpoint}/order-summary`;