"use client";
import Image from "next/image";
import s from "./Features.module.scss";
import arrow from "@/assets/icons/arrowUp.svg";
import coin from "@/assets/images/dollar-dollar-premium.png";
import bolt from "@/assets/icons/Bolt.svg";
import rocket from "@/assets/images/locker.png";
import computer from "@/assets/images/computer-dynamic-premium.png";
import buildings from "@/assets/icons/buildings.svg";
import security from "@/assets/icons/security.svg";
import roshod from "@/assets/icons/roshod.svg";
import chart from "@/assets/images/chart-dynamic-premium.png";
import locker from "@/assets/images/locker-dynamic-premium.png";
import { useTranslation } from "@/hooks/useTranslation";

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className={s.features}>
      <div className="container">
        <div className={s.content}>
          <div className={s.header}>
            <span className={s.subtitle}>{t.featuresSubtitle}</span>
            <h2 className={s.title}>
              {t.featuresTitleLine1}
              <br />
              {t.featuresTitleLine2}
            </h2>
          </div>
          <div className={s.cards}>
            <div className={s.blockTop}>
              <div className={s.firstCard}>
                <div className={s.text}>
                  <Image src={arrow} alt="photo" />
                  <h5>{t.saveOnAcquiringTitle}</h5>
                  <p>{t.saveOnAcquiringDesc}</p>
                </div>
                <Image
                  style={{ bottom: "-10px" }}
                  src={coin}
                  alt="photo"
                  className={s.coin}
                />
              </div>

              <div
                className={s.secondCard}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div className={s.text}>
                  <Image src={bolt} alt="photo" />
                  <h5>{t.speedTitle}</h5>
                  <p>{t.speedDesc}</p>
                </div>
                <div className={s.coin}>
                  <Image
                    style={{ bottom: "10px", position: "absolute" }}
                    src={rocket}
                    alt="photo"
                  />
                </div>
              </div>

              <div className={s.thirdCard}>
                <div className={s.text}>
                  <Image src={buildings} alt="photo" />
                  <h5>{t.quickIntegrationTitle}</h5>
                  <p>{t.quickIntegrationDesc}</p>
                </div>
                <Image
                  style={{ bottom: "-10px" }}
                  src={computer}
                  alt="photo"
                  className={s.coin}
                />
              </div>
            </div>

            <div className={s.blockBottom}>
              <div className={s.left}>
                <div className={s.text}>
                  <Image src={security} alt="photo" />
                  <h5>{t.securityTitle}</h5>
                  <p>{t.securityDesc}</p>
                </div>
                <Image src={locker} alt="photo" className={s.coin} />
              </div>
              <div className={s.left}>
                <div className={s.text}>
                  <Image src={roshod} alt="photo" />
                  <h5>{t.lowerCostsTitle}</h5>
                  <p>{t.lowerCostsDesc}</p>
                </div>
                <Image src={chart} alt="photo" className={s.coin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
