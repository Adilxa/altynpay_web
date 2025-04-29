"use client";
import s from "./Info.module.scss";
import {useState} from "react";
import bag from "@/assets/images/bag-dynamic-premium.png";
import Image from "next/image";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {useTranslation} from "@/hooks/useTranslation";

const Info = () => {
    const {t} = useTranslation();

    // Новый текстовый контент
    const customContent = {
        infoSubtitle: "Инновации и качество",
        infoTitleLine1: "Наши продукты",
        infoTitleLine2: "для вашего комфорта",
        slides: [
            {
                title: "Эргономичный дизайн",
                description: "Наши изделия разработаны с учетом современных требований к комфорту и функциональности. Каждая деталь продумана для вашего удобства при повседневном использовании.",
                buttons: ["Дизайн", "Комфорт", "Эргономика"]
            },
            {
                title: "Высококачественные материалы",
                description: "Мы используем только проверенные материалы премиум-класса, которые обеспечивают долговечность и надежность наших изделий даже при интенсивном использовании.",
                buttons: ["Качество", "Премиум", "Долговечность"]
            },
            {
                title: "Функциональность на каждый день",
                description: "Продуманные отделения, карманы и держатели позволяют организовать пространство и хранить все необходимые вещи в идеальном порядке, экономя ваше время.",
                buttons: ["Практичность", "Организация", "Удобство"]
            },
            {
                title: "Стильное решение для города",
                description: "Современный дизайн наших продуктов идеально дополнит ваш городской образ, подчеркнув индивидуальность и следование актуальным трендам.",
                buttons: ["Стиль", "Тренд", "Городской"]
            }
        ]
    };

    const [current, setCurrent] = useState(0);

    const slideImages = [bag, bag, bag, bag]; // используешь свои изображения
    const slides = customContent.slides.map((slide, index) => ({
        ...slide,
        image: slideImages[index],
    }));

    const total = slides.length;

    const next = () => setCurrent((prev) => (prev + 1) % total);
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
    const progress = ((current + 1) / total) * 100;

    return (
        <section id="info" className={s.Info}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.header}>
                        <span className={s.subtitle}>{customContent.infoSubtitle}</span>
                        <h2 className={s.title}>
                            {customContent.infoTitleLine1} <br/>
                            {customContent.infoTitleLine2}
                        </h2>
                    </div>

                    <div className={s.slider}>
                        <div className={s.topBox}>
                            <div className={s.textSection}>
                                <h2>{slides[current].title}</h2>
                                <p>{slides[current].description}</p>
                                <div className={s.buttons}>
                                    {slides[current].buttons.map((btn, i) => (
                                        <span key={i}>{btn}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={s.imageSection}>
                                <Image src={slides[current].image} alt="Slide image"/>
                            </div>
                        </div>

                        <div className={s.bottomBox}>
                            <div className={s.controls}>
                                <button onClick={prev}>
                                    <IoIosArrowBack/>
                                </button>
                                <button onClick={next}>
                                    <IoIosArrowForward/>
                                </button>
                            </div>

                            <div className={s.progressBar}>
                                <div className={s.fill} style={{width: `${progress}%`}}/>
                            </div>

                            <div className={s.counter}>
                                {String(current + 1).padStart(2, "0")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;