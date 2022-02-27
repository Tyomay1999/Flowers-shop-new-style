import Head from "next/head";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import AllProducts from "../Components/AllProducts/allProducts";
import { allProducts } from "../Components/newProducts/config";
import { fetchingDataWithAxiosMiddleware } from "../Redux/Action/common.action";
import { ALL_FLOWERS_URL } from "./api/sampleApi";

const AllFlowersPage = (props) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>All flowers</title>
            </Head>
            <Header />
            {/*TODO design problem in card witch situated in allProducts component*/}
            <AllProducts products={props.products} />
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    try {
        const response = await fetchingDataWithAxiosMiddleware("GET", ALL_FLOWERS_URL)
        if(response?.status){
            return {
                props: {
                    products: response.data?.flowers,
                },
            }
        }
        return {
            props: {
                products: allProducts,
            },
        }
    }catch ( error ) {
        console.log(error)
        return {
            props: {
                products: allProducts,
            },
        }

    }
}

export default AllFlowersPage