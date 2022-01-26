import React, {useState} from 'react';
import messageStyle from './message.module.scss'

const Message = () => {
    const [isShow, showMessage] = useState(false)
    const message = 'Warning this alert was worked'
    return <div className={messageStyle.main}>
        <button onClick={() => showMessage(!isShow)}>
            Show message
        </button>
        {
            isShow && <div className={`${messageStyle.messageContainer} ${messageStyle.show}`}>
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
    </div>
}

export default Message;