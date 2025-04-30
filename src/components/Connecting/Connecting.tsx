"use client";
import Image from "next/image";
import s from "./Connecting.module.scss";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const Connecting = () => {
  const { t } = useTranslation();

  const steps = t.connectingSteps.map((step, index) => ({
    ...step,
    id: index + 1,
  }));

  return (
    <section id="connecting" className={`${s.Connecting} container`}>
      <div className="container">
        <div className={s.content}>
          <div className={s.header}>
            <span className={s.subtitle}>{t.connectingSubtitle}</span>
            <h2 className={s.title}>{t.connectingTitle}</h2>
          </div>

          <div className={s.cards}>
            {steps.map((step) => (
              <div key={step.id} className={s.box}>
                <div className={s.card}>
                  <Image
                    src={step.icon}
                    alt={`Step ${step.id}`}
                    width={8000}
                    height={8000}
                  />
                  <p>{step.text}</p>
                </div>
                <div className={s.stepWrapper}>
                  <div className={s.stepNumber}>{step.id}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={s.buttonWrapper}>
            <Link href="/form">
              <button className={s.button}>{t.connectingButton}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connecting;
