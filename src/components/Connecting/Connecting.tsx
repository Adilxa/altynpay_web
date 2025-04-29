"use client";
import Image from "next/image";
import s from "./Connecting.module.scss";
import photo from "@/assets/images/copy-dynamic-premium.png";
import {useTranslation} from "@/hooks/useTranslation";

const Connecting = () => {
    const {t} = useTranslation();

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
                                        src={photo}
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
                        <button className={s.button}>{t.connectingButton}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connecting;
