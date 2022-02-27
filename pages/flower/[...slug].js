import Head from "next/head";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Product from "../../Components/Product/product";
import SimilarProduct from "../../Components/Common/SimilarProduct/similarProduct";
import { fetchingDataWithAxiosMiddleware } from "../../Redux/Action/common.action";
import { back_url } from "../api/sampleApi";

const Product_slug = ( props ) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>Flower with slug</title>
            </Head>
            <Header/>
            <Product product={props.product}/>
            <SimilarProduct categories={props.product.categories}/>
            <Footer/>
        </>
    )
}

export async function getServerSideProps( { params } ) {
    // console.log(params.slug[0])
    try {
        const res = await fetchingDataWithAxiosMiddleware("GET",`http://localhost:8000/api/flower/slug/${params.slug[0]}`)
        return {
            props: {
                product: res.data.flower
            },
        }
    } catch ( error ){
        throw error
    }
}

export default Product_slug
