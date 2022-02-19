import axios from "axios";

// export const SEND_CUSTOMER_MESSAGE = "SEND CUSTOMER MESSAGE"
export const SET_ORDER_DETAILS = "SET ORDER DETAILS"

export const setOrderDetails = payload => {
    return {
        type: SET_ORDER_DETAILS,
        payload
    }
}



export const fetchingDataWithAxiosMiddleware = async ( method, url, formData ) => {
    const handlerObjectForSend = {
        method,
        url,
        headers : {
            'Content-Type' : 'application/json',
        }
    };
    if ( method !== 'GET' ) {
        handlerObjectForSend.data = formData;
    }
    return axios( handlerObjectForSend );
};