import axios from "axios";
import { ADD_CUSTOMER_MESSAGE } from "../../pages/api/sampleApi";

// export const SEND_CUSTOMER_MESSAGE = "SEND CUSTOMER MESSAGE"
export const SET_ORDER_DETAILS = "SET ORDER DETAILS"

export const setOrderDetails = payload => {
    return {
        type: SET_ORDER_DETAILS,
        payload
    }
}

export const sendMessages = customer => async dispatch => {
    try {
        const fd = new FormData()
        fd.append( 'name', customer.name )
        fd.append( 'phone', customer.phone )
        fd.append( 'email', customer.email )
        fd.append( 'message', customer.message )
        const response = await fetchingDataWithAxiosMiddleware( "POST", ADD_CUSTOMER_MESSAGE, fd )
        if ( response.status ) {
            console.log( response.data )
        }
    } catch ( error ) {
        throw error
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