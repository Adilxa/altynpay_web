"use client";
import s from "./Info.module.scss";
import { useState } from "react";
import bag from "@/assets/images/bag-dynamic-premium.png";
import notebook from "@/assets/images/notebook-dynamic-premium.png";
import money from "@/assets/images/money-dynamic-premium.png";
import mincraft from "@/assets/images/minecraft-dynamic-premium.png";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "@/hooks/useTranslation";

const Info = () => {
  const { t } = useTranslation();

  const [current, setCurrent] = useState(0);

  const slideImages = [bag, notebook, money, mincraft];
  const slides = t.infoSection.slides.map((slide, index) => ({
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
            <span className={s.subtitle}>{t.infoSection.infoSubtitle}</span>
            <h2 className={s.title}>
              {t.infoSection.infoTitleLine1} <br />
              {t.infoSection.infoTitleLine2}
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
                <Image
                  src={slides[current].image}
                  alt="Slide image"
                  width={2000}
                  height={2000}
                />
              </div>
            </div>

            <div className={s.bottomBox}>
              <div className={s.controls}>
                <button onClick={prev}>
                  <IoIosArrowBack />
                </button>
                <button onClick={next}>
                  <IoIosArrowForward />
                </button>
              </div>

              <div className={s.progressBar}>
                <div className={s.fill} style={{ width: `${progress}%` }} />
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
