import React from 'react'
import cardStyles from './card.module.scss'
import {useDispatch} from "react-redux";
import {selectProduct} from "../../Redux/Reducers/product.reducer";
import {useRouter} from "next/router";
import {addProduct} from "../../Redux/Reducers/cart.reducer";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
    FacebookShareButton, FacebookIcon,
    VKShareButton, VKIcon,
    ViberShareButton, ViberIcon,
    WhatsappShareButton, WhatsappIcon,
    FacebookMessengerShareButton, FacebookMessengerIcon,
    TelegramShareButton, TelegramIcon
} from "react-share";


export const handlerCart = (e, product, dispatch) => {
    e.stopPropagation();
    dispatch(addProduct(product))
}
export const chooseProduct = (product, dispatch) => {
    dispatch(selectProduct(product))
}
const Card = ({product}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const {discount, photo, name, price, lastPrice, isNew} = product
    const shareUrl = `http://localhost:3000/flower/${product.slug}`
    return (
        <div onClick={() => {
            router.push(`/flower/${product.slug}`)
            chooseProduct(product, dispatch)
        }} className={cardStyles.box}>
            <span className={cardStyles.discount}>-{discount}%</span>
            {
                isNew && <span className={cardStyles.type}>new</span>
            }
            <div className={cardStyles.image}>
                <img src={photo} alt=""/>
                <div onClick={(e) => e.stopPropagation()} className={cardStyles.icons}>
                    {/*<i className="bi bi-heart" />*/}
                    <i onClick={(e) => handlerCart(e, product, dispatch)}
                       className={`bi bi-cart-${product.inCart ? 'check' : 'plus'}`}/>
                    {/*<i className="bi bi-cart-check" />*/}
                    {/*TODO change url and share design */}
                    <div className={cardStyles.shareBlock}>
                        <i className="bi bi-share-fill"/>

                        <div className={cardStyles.share}>
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={30} round={true}/>
                            </FacebookShareButton>
                            <VKShareButton  url={shareUrl}>
                                <VKIcon size={30}  round={true}/>
                            </VKShareButton>
                            <TelegramShareButton url={shareUrl}>
                                <TelegramIcon size={30} round={true}/>
                            </TelegramShareButton>
                            <ViberShareButton url={shareUrl}>
                                <ViberIcon size={30} round={true}/>
                            </ViberShareButton>
                            <WhatsappShareButton url={shareUrl}>
                                <WhatsappIcon size={30} round={true}/>
                            </WhatsappShareButton>
                            <FacebookMessengerShareButton url={shareUrl}>
                                <FacebookMessengerIcon size={30} round={true}/>
                            </FacebookMessengerShareButton>
                            <div className={cardStyles.copyBox}>
                                <CopyToClipboard text={`http://localhost:3000/flower/${product.slug}`}>
                                    <i class="bi bi-files" />
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cardStyles.content}>
                <h3>{name}</h3>
                <div className={cardStyles.price}> ${price} <span>${lastPrice}</span></div>
            </div>
        </div>
    )
}
//TODO review jsx
export default Card
