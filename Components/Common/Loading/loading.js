import React, {useState} from "react";
import loadingStyles from './loading.module.scss'

const Loading = () => {
    return (
        <div className={`${loadingStyles.container} ${loadingStyles.loadingFinished}`}>
            <div className={loadingStyles.wrapperLigth}>
                <img  src='/Assets/loadingLight.png' alt='loading' className={loadingStyles.loadingImage} />
                <div className={loadingStyles.loadingLigthDiv}/>
            </div>
        </div>
    )
}

export default Loading;