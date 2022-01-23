import Head from "next/head";
import Cart from "../../Components/Cart/cart";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Product from "../../Components/Product/product";
import SimilarProduct from "../../Components/Common/SimilarProduct/similarProduct";
import { useSelector } from "react-redux";

const Product_slug = ( props ) => {
    console.log( props.slug )
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>Flower with slug</title>
            </Head>
            <Header/>
            <Product/>
            <SimilarProduct/>
            <Footer/>
        </>
    )
}

export async function getServerSideProps( { params } ) {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    return {
        props: {
            slug: params,
        },
    }
}

export default Product_slug
