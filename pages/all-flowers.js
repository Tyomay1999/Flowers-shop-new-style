import Head from "next/head";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import AllProducts from "../Components/AllProducts/allProducts";

const AllFlowersPage = ({props}) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
                <title>All flowers</title>
            </Head>
            <Header />
            <AllProducts />
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

export default AllFlowersPage