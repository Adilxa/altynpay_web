"use client";
import React from "react";
import styles from "./BurgerMenu.module.scss";
import Link from "next/link";
import {useHeaderStore} from "@/stores/useHeaderStore";
import LanguageSwitcher from "@/ui/LanguageSwitcher/LanguageSwitcher";
import {useTranslation} from "@/hooks/useTranslation";

const BurgerMenu: React.FC = () => {
    const {isOpenModal, setIsOpenModal} = useHeaderStore();
    const {t} = useTranslation();

    return (
        <div className={styles.main}>
            <nav
                className={`${styles.navMenu} ${isOpenModal ? styles.active : ""}`}
            >
                <div className={styles.link}>
                    <LanguageSwitcher/>
                    <Link onClick={() => {
                        setIsOpenModal(!isOpenModal);
                    }} href="/#main">{t.home}</Link>
                    <Link
                        onClick={() => {
                            setIsOpenModal(!isOpenModal);
                        }}
                        href="/#info">{t.about}</Link>
                    <Link
                        onClick={() => {
                            setIsOpenModal(!isOpenModal);
                        }}
                        href="/#working">{t.howToPay}</Link>
                    <Link
                        onClick={() => {
                            setIsOpenModal(!isOpenModal);
                        }}
                        href="/#connecting">{t.connecting}</Link>
                    <Link
                        onClick={() => {
                            setIsOpenModal(!isOpenModal);
                        }}
                        href="/#licenses">{t.licenses}</Link>
                </div>
                <button>{t.account}</button>
            </nav>
        </div>
    );
};

export default BurgerMenu;
