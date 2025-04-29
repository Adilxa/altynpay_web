"use client";
import s from "./Working.module.scss";
import { useTranslation } from "@/hooks/useTranslation";

const Working = () => {
  const { t } = useTranslation();

  return (
    <section id="working" className={s.Working}>
      <div className="container">
        <div className={s.content}>
          <div className={s.header}>
            <span className={s.subtitle}>{t.workingSubtitle}</span>
            <h2 className={s.title}>{t.workingTitle}</h2>
          </div>

          <div className={s.box}>
            <div className={s.boxLeft}>
              <span className={s.subtitle}>{t.calculated}</span>
              <h5>{t.commissionText}</h5>
              <p>{t.commissionDescription}</p>
            </div>

            <div className={s.divider}></div>

            <div className={s.boxLeft}>
              <span className={s.subtitle}>{t.guaranteed}</span>
              <h5>{t.instantTransfer}</h5>
              <p>{t.instantTransferDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
