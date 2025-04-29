"use client";
import s from "./ContactBot.module.scss";
import {useTranslation} from "@/hooks/useTranslation";

const ContactBot = () => {
    const {t} = useTranslation();

    return (
        <section className={s.ContactBot}>
            <div className="container">
                <div className={s.content}>
                    <form>
                        <h1 style={{textWrap: "nowrap"}}>{t.contactTitle}</h1>
                        <p>{t.contactDescription}</p>
                        <input type="text" placeholder={t.placeholderName}/>
                        <input type="text" placeholder={t.placeholderEmail}/>
                        <input type="text" placeholder={t.placeholderQuestion}/>

                        <div className={s.check}>
                            <input type="checkbox"/>
                            <p>{t.privacyPolicy}</p>
                        </div>
                        <button>{t.submitButton}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactBot;
