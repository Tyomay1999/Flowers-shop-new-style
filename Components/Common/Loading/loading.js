import React from "react";
import loadingStyles from './loading.module.scss'

const Loading = () => {
    return (
        <div className={`${loadingStyles.container} ${loadingStyles.loadingFinished}`}>
            <div className={loadingStyles.wrapperLight}>
                <img  src='/Assets/loadingLight.png' alt='loading' className={loadingStyles.loadingImage} />
                <div className={loadingStyles.loadingLightDiv}/>
            </div>
        </div>
    )
}

export default Loading;