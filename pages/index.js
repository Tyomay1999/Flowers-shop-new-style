import Head from 'next/head'
import styles from '../styles/Home.module.css'
import List from "../Components/List/list";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";

//TODO add search
//TODO add pagination
//TODO check delivery time logic
//TODO change static words

export default function Home() {
    return (
        <div className={ styles.container }>
            <Head>
                <title>Flowers shop</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
            </Head>
            <Header/>
            <main className={ styles.main }>
                <List/>
            </main>

            <footer className={ styles.footer }>
                <Footer/>
            </footer>
        </div>
    )
}
