import Head from "next/head";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import AllProducts from "../Components/AllProducts/allProducts";
// import { allProducts } from "../Components/newProducts/config";
import { fetchingDataWithAxiosMiddleware } from "../Redux/Action/common.action";
import { ALL_FLOWERS_URL } from "./api/sampleApi";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { setAllFlowers } from "../Redux/Action/product.action";
import {pages_words} from "../Components/Common/web-site-static-words";

const AllFlowersPage = ( props ) => {
    const dispatch = useDispatch()
    const setProducts = useCallback( () => {
        dispatch( setAllFlowers( props.products ) )
    }, [] )
    useEffect( () => {
        setProducts()
    }, [] )
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>{pages_words.all_flowers}</title>
            </Head>
            <Header/>
            <AllProducts products={ props.products }/>
            <Footer/>
        </>
    )
}

// TODO check getStaticProps
export async function getStaticProps() {
    try {
        const response = await fetchingDataWithAxiosMiddleware( "GET", ALL_FLOWERS_URL )
        if ( response?.status ) {
            return {
                props: {
                    products: response.data?.flowers,
                },
            }
        }
        return {
            props: {
                products: [],
            },
        }
    } catch ( error ) {
        console.log( error )
        return {
            props: {
                products: [],
            },
        }

    }
}

export default AllFlowersPage