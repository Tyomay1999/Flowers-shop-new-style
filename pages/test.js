import Head from "next/head";
import ShippingDetails from "../Components/ShipingDetails/shippingDetails";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
// import Message from "../Components/Common/Message/message";
import dynamic from "next/dynamic";
import {allProducts} from "../Components/newProducts/config";
// import Card from "../Components/Card/card";
import useInView from "react-cool-inview";
const Card = dynamic(() => import("../Components/Card/card"))
const Test = ({props}) => {
    const { observe, inView } = useInView();
    console.log(inView)
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>Test page</title>
            </Head>
            <Header />
            <div style={{height: '100vh', width: '100%', background: 'red'}} />
            {/*<Message />*/}
            <div ref={observe} style={{ margin: '100px 500px', height: '100vh', width: '100%'}}>
                {
                    inView &&  <Card product={allProducts[0]} />
                }
            </div>
            <div style={{height: '100vh', width: '100%', background: 'blue'}} />
            <Footer />
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

export default Test