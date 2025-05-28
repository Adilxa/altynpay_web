import React from 'react';
import LoginFooter from "@/components/Footer/LoginFooter";
import LoginForm from "@/components/Form/LoginForm";
import Header from "@/components/Header/Header";

const Page = () => {
    return (
        <>
            <Header/>
            <div className={'container flex flex-col justify-center items-center gap-10'}>
                <LoginForm/>
                <LoginFooter/>
            </div>
        </>
    );
};

export default Page;