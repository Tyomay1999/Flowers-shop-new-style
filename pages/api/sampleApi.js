export const back_url = process.env.BASE_URL
export const front_url = process.env.FRONT_URL
const defaultUrl = process.env.BASE_URL_ENDPOINT
export const ALL_CATEGORIES_URL = `${defaultUrl}/categories/all`
export const GET_NEW_FLOWERS_URL = `${defaultUrl}/flower/new`
export const GET_CART_FLOWERS_URL = `${defaultUrl}/flower/cart`
export const ALL_FLOWERS_URL = `${defaultUrl}/flower/all`
//TODO change GET_ALL_FLOWERS_URL route
export const GET_ALL_FLOWERS_URL = `${defaultUrl}/flower/allFlowers`
export const GET_PRODUCTS_BY_SEARCH = `${defaultUrl}/flower/search`
export const ADD_CUSTOMER_MESSAGE = `${defaultUrl}/customer/messages/send`
export const GET_SIMILAR_PRODUCT = `${defaultUrl}/flower/similar`
export const SET_ORDER = `${defaultUrl}/order/set`
