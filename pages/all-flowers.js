import Head from "next/head";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import AllProducts from "../Components/AllProducts/allProducts";
import { allProducts } from "../Components/newProducts/config";

const AllFlowersPage = (props) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>All flowers</title>
            </Head>
            <Header />
            <AllProducts products={props.products} />
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    return {
        props: {
            products: allProducts,
        },
    }
}

export default AllFlowersPage