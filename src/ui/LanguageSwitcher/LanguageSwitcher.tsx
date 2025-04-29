"use client";

import Image from "next/image";
import styles from "./LanguageSwitcher.module.scss";
import rus from "@/assets/icons/rus.svg";
import kyr from "@/assets/icons/kyr.svg";
import {useLanguageStore} from "@/stores/useLanguageStore";
import {useEffect, useState} from "react";

export default function LanguageSwitcher() {
    const language = useLanguageStore((state) => state.language);
    const setLanguage = useLanguageStore((state) => state.setLanguage);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSwitch = (e: any) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setLanguage(language === "ru" ? "kg" : "ru");
        e.preventDefault();

        // Reset animation state after transition completes
        setTimeout(() => {
            setIsAnimating(false);
        }, 600);
    };

    const isRussian = language === "ru";
    const flagSrc = isRussian ? rus : kyr;

    return (
        <div className={styles.switcher} onClick={handleSwitch}>
            <div className={styles.track}>
                <div className={`${styles.slider} ${!isRussian ? styles.sliderRight : ""}`}>
                    <Image
                        src={flagSrc}
                        alt={isRussian ? "Русский" : "Кыргызча"}
                        width={32}
                        height={32}
                        className={styles.flagImage}
                    />
                </div>
            </div>
        </div>
    );
}