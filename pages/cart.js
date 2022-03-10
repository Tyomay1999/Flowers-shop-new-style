import Head from "next/head";
import Cart from "../Components/Cart/cart";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import { pages_words } from "../Components/Common/web-site-static-words";

const CartPage = ( { props } ) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>{pages_words.cart}</title>
            </Head>
            <Header/>
            <Cart/>
            <Footer/>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            greeting: 'hello',
        },
    }
}

export default CartPage