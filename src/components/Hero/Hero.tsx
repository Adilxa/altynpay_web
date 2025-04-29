"use client";
import Image from "next/image";
import s from "./Hero.module.scss";
import payment from "@/assets/images/Payment.png";
import {useTranslation} from "@/hooks/useTranslation";

const Hero = () => {
    const {t} = useTranslation();

    return (
        <section id={'main'} className={s.Hero}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.blockRight}>
                        <div className={s.box}>
                            <h1>{t.heroTitle}</h1>
                            <div className={s.pButton}>
                                <p>{t.heroSubtitle}</p>
                                <button>{t.connectBusiness}</button>
                            </div>
                        </div>

                        <div className={s.blockFoto}>
                            <Image src={payment} alt="photo"/>
                            <h6>{t.instantPayments}</h6>
                        </div>
                    </div>
                    <div className={s.blockLeft}>
                        <div className={s.comission}>
                            <h4>{t.commissionTitle}</h4>
                            <p>{t.commissionSubtitle}</p>
                        </div>
                        <div className={s.nums}>
                            <span>0,8%</span>
                            <span>0,9%</span>
                            <span>1%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
