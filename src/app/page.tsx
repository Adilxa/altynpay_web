import Connecting from "@/components/Connecting/Connecting";
import ContactBot from "@/components/contactBot/ContactBot";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import Working from "@/components/Working/Working";
import FastPayments from "@/components/FastPayments";

const page = () => {
    return (
        <>
            <Header/>
            <Hero/>
            {/*<FastPayments/>*/}
            <Features/>
            <Info/>
            <Connecting/>
            <Working/>
            <ContactBot/>
            <Footer/>
        </>
    );
};

export default page;
