import Head from "next/head";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    PLACEHOLDER DEMO
                </title>
                <link rel="icon" href="./static/favicon.ico"/>
                <meta name="description" content="Owen Bick is a software engineer based in Boston."/>
                <meta name="author" content="Owen Bick"/>
            </Head>
            <Header></Header>
            <Layout>
                <section className="hero">
                    <div className="container">
                        <Image src="https://placeholderjs.com/500x500" alt="test" />
                    </div>
                </section>
            </Layout>
            <Footer></Footer>
        </>
    );
}
