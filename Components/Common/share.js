import React from "react";
import {
    FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton, ViberIcon, ViberShareButton,
    VKIcon,
    VKShareButton, WhatsappIcon, WhatsappShareButton
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const shareHandler = (shareUrl,styleSheet,size,round) => {
    return <div className={styleSheet.share}>
        <div className={styleSheet.shareWrapper}>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={size} round={round}/>
            </FacebookShareButton>
        </div>
        <div className={styleSheet.shareWrapper}>
            <VKShareButton  url={shareUrl}>
                <VKIcon size={size}  round={round}/>
            </VKShareButton>
        </div>
        <div className={styleSheet.shareWrapper}>
            <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={size} round={round}/>
            </TelegramShareButton>
        </div>
        <div className={styleSheet.shareWrapper}>
            <ViberShareButton url={shareUrl}>
                <ViberIcon size={size} round={round}/>
            </ViberShareButton>
        </div>
        <div className={styleSheet.shareWrapper}>
            <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={size} round={round}/>
            </WhatsappShareButton>
        </div>
        <div className={styleSheet.shareWrapper}>
            <FacebookMessengerShareButton url={shareUrl}>
                <FacebookMessengerIcon size={size} round={round}/>
            </FacebookMessengerShareButton>
        </div>
        <div className={styleSheet.shareWrapper}>
            <CopyToClipboard text={`${shareUrl}`}>
                <i className="bi bi-files" />
            </CopyToClipboard>
        </div>
    </div>
}