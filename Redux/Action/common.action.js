import axios from "axios";
import { ADD_CUSTOMER_MESSAGE } from "../../pages/api/sampleApi";
import { messages } from "../../Components/Common/web-site-static-words";

export const SET_ORDER_DETAILS = "SET ORDER DETAILS"
export const SET_MESSAGE = "SET MESSAGE"
export const CLEAR_MESSAGE = "CLEAR MESSAGE"
export const CHANGE_LOADING = "CHANGE LOADING"
export const CHANGE_PAGES = 'CHANGE PAGES'
export const SET_PAGES_DATA = 'SET PAGES DATA'

export const setPagesData = (payload, limit) => {
    return {
        type: SET_PAGES_DATA,
        payload,
        limit
    }
}

export const changePage = (payload,limit) => {
    return {
        type: CHANGE_PAGES,
        payload,
        limit
    }
}


export const setLoading = payload => {
    return {
        type: CHANGE_LOADING,
        payload
    }
}


export const setMessage = payload => {
    return {
        type: SET_MESSAGE,
        payload
    }
}

export const clearMessage = () => {
    return { type: CLEAR_MESSAGE }
}

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
            dispatch(setMessage(messages.message_sent))
        }
    } catch ( error ) {
        dispatch(setMessage(messages.network_connection))
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