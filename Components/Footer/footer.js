import React from 'react'
import footerStyles from './footer.module.scss'
import { footerLocalImages } from '../../public/Assets/images/imagesContrller'
import Link from 'next/link'
import Iframe from "react-iframe";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { useDispatch } from "react-redux";
import { setMessage } from "../../Redux/Action/common.action";
import { footer_section, messages } from "../Common/web-site-static-words";


const Footer = () => {
    const dispatch = useDispatch()
    const shopInfo = {
        phone: "+7-926-812-28-33",
        email: "cvetkiflorici@gmail.com",
        address: "Russia, Moscow - 121601"
    }
    return (
        <footer className={ footerStyles.main }>

            <div className={ footerStyles[ 'box-container' ] }>

                <div className={ footerStyles.box }>
                    <h3>{footer_section.quick_links}</h3>
                    <Link href="/#greetings">{footer_section.home}</Link>
                    <Link href="/#about">{footer_section.about}</Link>
                    <Link href="/all-flowers">{footer_section.products}</Link>
                    {/*<Link href="/#newProducts">{footer_section.new_products}</Link>*/}
                    <Link href="/#contact">{footer_section.contact}</Link>
                </div>

                <div className={ footerStyles.box }>
                    <h3>{footer_section.locations}</h3>
                    <span>{footer_section.city}</span>
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6147662810085!2d37.487280999999996!3d55.765193999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd364d1e678e4c6c0!2zNTXCsDQ1JzU0LjciTiAzN8KwMjknMTQuMiJF!5e0!3m2!1sru!2s!4v1653984351098!5m2!1sru!2s"
                        width="250"
                        height="210"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                    />
                </div>

                <div className={ footerStyles.box }>
                    <h3>{footer_section.contact_info}</h3>
                    <CopyToClipboard text={ shopInfo.phone }>
                        <span onClick={ () => dispatch( setMessage( messages.coped_to_clipboard ) ) }>
                            <a href={ `tel: ${ shopInfo.phone }` }>
                                <i className="bi bi-telephone-forward-fill"/> { shopInfo.phone }
                            </a>
                        </span>
                    </CopyToClipboard>
                    <CopyToClipboard text={ shopInfo.email }>
                        <span onClick={ () => dispatch( setMessage( messages.coped_to_clipboard ) ) }>
                            <i className="bi bi-envelope"/> { shopInfo.email }
                        </span>
                    </CopyToClipboard>
                    <CopyToClipboard text={ shopInfo.address }>
                        <span onClick={ () => dispatch( setMessage( messages.coped_to_clipboard ) ) }>
                            <i className="bi bi-geo-alt"/> { shopInfo.address }
                        </span>
                    </CopyToClipboard>
                    <img src={ footerLocalImages.payment } alt=""/>
                </div>

            </div>

            {/*<div className={ footerStyles.credit }> created by <span> @Tyomay1999 </span> | all rights reserved</div>*/ }

        </footer>
    )
}

export default Footer
