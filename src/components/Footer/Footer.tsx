"use client";
import Image from "next/image";
import s from "./Footer.module.scss";
import logo from "@/assets/icons/logo.svg";
import Link from "next/link";
import letter from "@/assets/icons/Letter.svg";
import call from "@/assets/icons/Phone.svg";
import map from "@/assets/icons/Map Point.svg";
import telegram from "@/assets/images/telegram.png";
import whatsapp from "@/assets/images/whatsapp.png";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={s.Footer}>
      <div className="container">
        <div className={s.content}>
          <header>
            <Image src={logo} alt="logo" />

            <nav>
              <Link href="/">{t.home}</Link>
              <Link href="/">{t.aboutSystem}</Link>
              <Link href="/">{t.howToPay}</Link>
              <Link href="/">{t.pricing}</Link>
              <Link href="/">{t.connection}</Link>
            </nav>
          </header>

          <div className={s.footer}>
            <div className={s.text}>
              <h1>{t.contacts}</h1>
              <div className={s.contact}>
                <Image src={letter} alt="photo" />
                <h6>AltynPay@bshk.ru</h6>
              </div>
              <div className={s.contact}>
                <Image src={call} alt="photo" />
                <h6>996 0500 005 005</h6>
              </div>
              <div className={s.contact}>
                <Image src={map} alt="photo" />
                <h6>Бишкек ул.Манас Токтогула</h6>
              </div>

              <div className={s.social}>
                <Image src={telegram} alt="photo" />
                <h6>{t.telegram}</h6>
              </div>
              <div className={s.social}>
                <Image src={whatsapp} alt="photo" />
                <h6>{t.whatsapp}</h6>
              </div>
            </div>

            <div className={s.btn}>
              <button>{t.connectBusiness}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
