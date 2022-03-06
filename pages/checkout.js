import Head from "next/head";
import ShippingDetails from "../Components/ShipingDetails/shippingDetails";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";

const CheckoutPage = ( { props } ) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>Checkout page</title>
            </Head>
            <Header/>
            <ShippingDetails/>
            <Footer/>
        </>
    )
}

export async function getStaticProps() {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    return {
        props: {
            greeting: 'hello',
        },
    }
}

export default CheckoutPage