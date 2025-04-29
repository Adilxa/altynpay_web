'use client'

import React from 'react';
import {useTranslation} from "@/hooks/useTranslation";
import payment from "@/assets/images/Payment.png";
import Image from "next/image";
import Button from "@/components/ui/Button";
import bolt from "@/assets/icons/Bolt.svg";
import coin from "@/assets/images/dollar-dollar-premium.png";

const MOCKDATA = [
    {
        icon: bolt,
        title: "Экономия на эквайринге",
        description: "Принимайте безналичную оплату без карт от клиентов разных банков и экономьте на эквайринге",
        img: coin
    },
    {
        icon: bolt,
        title: "Экономия на эквайринге",
        description: "Принимайте безналичную оплату без карт от клиентов разных банков и экономьте на эквайринге",
        img: coin
    },
    {
        icon: bolt,
        title: "Экономия на эквайринге",
        description: "Принимайте безналичную оплату без карт от клиентов разных банков и экономьте на эквайринге",
        img: coin
    }
]

const FastPayments = () => {
    const {t} = useTranslation();
    return (
        <section id={'main'} className={'flex gap-5 flex-col container'}>
            <div className={'grid grid-cols-3 gap-5 md:overflow'}>
                {
                    MOCKDATA.map((el: any) => (
                        <div
                            style={{
                                background: "linear-gradient(305.11deg, rgba(255, 255, 255, 0.31) -129.42%, rgba(255, 255, 255, 0.04) 76.25%)",
                                padding: "2rem",
                                borderRadius: "40px",
                                boxShadow: "4px 4px 0px 0px #F5F5F50A inset",
                                border: "1px solid #F5F5F51A",
                            }}
                            className={'flex flex-col gap-2 shadow'}>
                            <Image
                                style={
                                    {
                                        border: "1.23px solid #F5F5F50D",
                                        background: "#F5F5F51A"
                                    }
                                }
                                src={el.icon} width={50} height={50} className={'p-[12px] rounded-[12px]'}
                                alt={"icon"}/>
                            <h1 className={'text-[#F5F5F5] font-bold text-[36px]'}>
                                {el.title}
                            </h1>
                            <p className={'text-[#F5F5F5] font-semibold text-[18px]'}>{el.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default FastPayments;