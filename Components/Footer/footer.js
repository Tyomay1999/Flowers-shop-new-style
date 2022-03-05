import React from 'react'
import footerStyles from './footer.module.scss'
import { footerLocalImages } from '../../public/Assets/images/imagesContrller'
import Link from 'next/link'
import Iframe from "react-iframe";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { useDispatch } from "react-redux";
import { setMessage } from "../../Redux/Action/common.action";


const Footer = () => {
    const dispatch = useDispatch()
    const shopInfo = {
        phone: '+123-456-7890',
        email: 'example@mail.ru',
        address: "Russia, Moscow - 400104"
    }
    return (
        <footer className={ footerStyles.main }>

            <div className={ footerStyles[ 'box-container' ] }>

                <div className={ footerStyles.box }>
                    <h3>quick links</h3>
                    <Link href='/'>home</Link>
                    <Link href='/'>about</Link>
                    <Link href='/'>products</Link>
                    <Link href='/'>review</Link>
                    <Link href='/'>contact</Link>
                </div>

                <div className={ footerStyles.box }>
                    <h3>locations</h3>
                    <span>Moscow</span>
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.405406946073!2d44.488959315644045!3d40.20004407671282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6bc6cf96ef%3A0x6932662afc4c86ff!2sBeeOnCode!5e0!3m2!1sen!2s!4v1636632487448!5m2!1sen!2s"
                        width="250"
                        height="210"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                    />
                </div>

                <div className={ footerStyles.box }>
                    <h3>contact info</h3>
                    <CopyToClipboard text={ shopInfo.phone }>
                        <span onClick={ () => dispatch( setMessage( 'Coped to Clipboard' ) ) }>
                            <a href={ `tel: ${ shopInfo.phone }` }>
                                <i className="bi bi-telephone-forward-fill"/> { shopInfo.phone }
                            </a>
                        </span>
                    </CopyToClipboard>
                    <CopyToClipboard text={ shopInfo.email }>
                        <span onClick={ () => dispatch( setMessage( 'Coped to Clipboard' ) ) }>
                            <i className="bi bi-envelope"/> { shopInfo.email }
                        </span>
                    </CopyToClipboard>
                    <CopyToClipboard text={ shopInfo.address }>
                        <span onClick={ () => dispatch( setMessage( 'Coped to Clipboard' ) ) }>
                            <i className="bi bi-geo-alt"/> { shopInfo.address }
                        </span>
                    </CopyToClipboard>
                    <img src={ footerLocalImages.payment } alt=""/>
                </div>

            </div>

            {/*<div className={ footerStyles.credit }> created by <span> @Tyomay1999 </span> | all rights reserved</div>*/}

        </footer>
    )
}

export default Footer
