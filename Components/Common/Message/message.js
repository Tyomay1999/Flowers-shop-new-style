import React, { useEffect, useState } from 'react';
import messageStyle from './message.module.scss'
import { useDispatch, useSelector } from "react-redux";
const Message = () => {
    const dispatch = useDispatch()
    const message = useSelector(state => state?.commonReducer.message)
    let timer = null;
    useEffect(() => {
        if (timer != null) {
            window.clearTimeout(timer);
            timer = null;
        } else {
            timer = window.setTimeout( () => {
                dispatch(clearMessage())
            },2000);
        }
        return () => window.clearTimeout(timer)
    },[message])
    if(message){
        return <div className={`${messageStyle.messageContainer} ${messageStyle.show}`}>
            <span className={messageStyle.warningCircle}>
                <i className="bi bi-exclamation-circle-fill"/>
            </span>
            {/*<i className="bi bi-exclamation-lg" />*/}
            {/*<i className="bi bi-x-octagon" />*/}
            <p className={messageStyle.message}>
                {message}
            </p>
            {/*<i className="bi bi-check-lg" />*/}
            <span className={messageStyle.closeButton}>
                <i className="bi bi-x-lg"/>
            </span>
        </div>
    }
    return null
}

import { clearMessage, setMessage } from "../../../Redux/Action/common.action";

export default Message;