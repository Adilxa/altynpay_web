"use client";
import Image from "next/image";
import letter from "@/assets/icons/Letter.svg";
import call from "@/assets/icons/Phone.svg";
import map from "@/assets/icons/Map Point.svg";
import telegram from "@/assets/images/telegram.png";
import whatsapp from "@/assets/images/whatsapp.png";
import {useTranslation} from "@/hooks/useTranslation";

const LoginFooter = () => {
    const {t} = useTranslation();

    return (
        <footer className="w-full py-10 max-[820px]:py-5">
            <div className="">
                <div
                    className="border border-white/15 rounded-[40px] px-25 py-15 max-[820px]:rounded-[20px] max-[820px]:px-2.5 max-[820px]:py-5">
                    <div
                        style={{padding: "2rem 2rem"}}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white max-[820px]:gap-2.5">
                        <div className={'col-span-1'}>
                            <h1 style={{marginBottom: "20px"}}
                                className="font-['Verdana'] font-bold text-[36px] leading-[130%] tracking-[-0.04em] max-[820px]:text-[22px]">
                                {t.contacts}
                            </h1>

                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-2.5">
                                    <Image src={letter} alt="email"/>
                                    <span
                                        className="font-['Verdana'] font-normal text-[20px] leading-[130%] tracking-[-0.06em] max-[820px]:text-base">
                                    altynpay.kg@gmail.com
                                </span>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <Image src={call} alt="phone"/>
                                    <span
                                        className="font-['Verdana'] font-normal text-[20px] leading-[130%] tracking-[-0.06em] max-[820px]:text-base">
                                    +996 999 778 667
                                </span>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <Image src={map} alt="location"/>
                                    <span
                                        className="font-['Verdana'] font-normal text-[20px] leading-[130%] tracking-[-0.06em] max-[820px]:text-base">
                                    Бишкек Суюмбаева 123/1
                                </span>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-1 flex flex-col gap-5 mt-5 max-[820px]:mt-0 max-[820px]:gap-0">
                            <div className="flex items-center gap-2.5 mt-5 max-[820px]:mt-0">
                                <Image src={telegram} alt="telegram"/>
                                <span className="font-['Verdana'] font-bold text-[24px] max-[820px]:text-lg">
                                    {t.telegram}
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Image src={whatsapp} alt="whatsapp"/>
                                <span className="font-['Verdana'] font-bold text-[24px] max-[820px]:text-lg">
                                    {t.whatsapp}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LoginFooter;