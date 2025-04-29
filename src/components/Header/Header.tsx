"use client";
import Image from "next/image";
import s from "./Header.module.scss";
import logo from "@/assets/icons/logo.svg";
import Link from "next/link";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import {useEffect, useState} from "react";
import BurgerButton from "@/ui/burgerButton/BurgerButton";
import {useHeaderStore} from "@/stores/useHeaderStore";
import BurgerMenu from "@/ui/burgerMenu/BurgerMenu";
import {useTranslation} from "@/hooks/useTranslation";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const {isOpenModal, setIsOpenModal} = useHeaderStore();
    const {t} = useTranslation();

    useEffect(() => {
        setIsMobile(window.innerWidth < 1000);
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.content}>
                    <Link href="/">
                        <Image src={logo} alt="logo" width={155} height={35}/>
                    </Link>

                    {!isMobile ? (
                        <nav className={s.nav}>
                            <nav>
                                <Link href="/#main">{t.home}</Link>
                                <Link href="/#info">{t.about}</Link>
                                <Link href="/#working">{t.howToPay}</Link>
                                <Link href="#connecting">{t.connecting}</Link>
                            </nav>
                            <div className={s.btns}>
                                <LanguageSwitcher/>
                                <button>{t.account}</button>
                            </div>
                        </nav>
                    ) : (
                        <button
                            className={s.burgerMenu}
                            onClick={() => setIsOpenModal(!isOpenModal)}
                        >
                            <BurgerButton/>
                        </button>
                    )}
                </div>
            </div>
            {isOpenModal && isMobile && <BurgerMenu/>}
        </header>
    );
};

export default Header;
