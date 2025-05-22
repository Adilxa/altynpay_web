"use client";
import Image from "next/image";
import s from "./Footer.module.scss";
import logo from "@/assets/icons/logo.svg";
import Link from "next/link";
import letter from "@/assets/icons/Letter.svg";
import call from "@/assets/icons/Phone.svg";
import map from "@/assets/icons/Map Point.svg";
import telegram from "@/assets/images/telegram.png";
import whatsapp from "@/assets/images/whatsapp.png";
import {useTranslation} from "@/hooks/useTranslation";
import {usePathname} from "next/navigation";

const Footer = () => {
    const {t} = useTranslation();
    const pathname = usePathname();

    return (
        <footer className={s.Footer}>
            <div className="container">
                <div className={s.content}>
                    <header>
                        <Image src={logo} alt="logo"/>

                        <nav>
                            <Link href="/#main">{t.home}</Link>
                            <Link href="/#info">{t.aboutSystem}</Link>
                            <Link href="/#working">{t.howToPay}</Link>
                            {/*<Link href="/#main">{t.pricing}</Link>*/}
                            <Link href="/#connecting">{t.connection}</Link>
                        </nav>
                    </header>

                    <div className={s.footer}>
                        <div className={s.text}>
                            <h1>{t.contacts}</h1>
                            <div className={s.contact}>
                                <Image src={letter} alt="photo"/>
                                <h6>altynpay.kg@gmail.com</h6>
                            </div>
                            <div className={s.contact}>
                                <Image src={call} alt="photo"/>
                                <h6>+996 999 778 667</h6>
                            </div>
                            <div className={s.contact}>
                                <Image src={map} alt="photo"/>
                                <h6>Бишкек Суюмбаева 123/1</h6>
                            </div>

                            <div className={s.social}>
                                <Image src={telegram} alt="photo"/>
                                <h6>{t.telegram}</h6>
                            </div>
                            <div className={s.social}>
                                <Image src={whatsapp} alt="photo"/>
                                <h6>{t.whatsapp}</h6>
                            </div>
                        </div>
                        {pathname !== "/form" && (
                            <div className={s.btn}>
                                <Link href="/form">
                                    <button>{t.connectBusiness}</button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
