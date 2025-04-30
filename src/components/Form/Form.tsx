"use client";
import { useTranslation } from "@/hooks/useTranslation";
import s from "./Form.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Form = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <section className={s.ContactBot}>
        <div className="container">
          <div className={s.content}>
            <form>
              <h1>{t.formTitle}</h1>
              <input type="text" placeholder={t.placeholderName} />
              <input type="text" placeholder={t.placeholderEmail} />
              <input type="text" placeholder={t.placeholderQuestion} />
              <div className={s.check}>
                <input type="checkbox" />
                <p>{t.privacyPolicy}</p>
              </div>
              <button>{t.formBtmn}</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Form;
