"use client";
import {useState, ChangeEvent, FormEvent} from "react";
import emailjs from "@emailjs/browser";
import s from "./ContactBot.module.scss";
import {useTranslation} from "@/hooks/useTranslation";

interface FormData {
    name: string;
    email: string;
    question: string;
    privacyAccepted: boolean;
}

const ContactBot: React.FC = () => {
    const {t, language} = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        question: "",
        privacyAccepted: false
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    emailjs.init("99jSd3AsW_OB-cBIq");

    const messages = {
        ru: {
            fillAllFields: "Заполните все поля",
            invalidEmail: "Неверный email",
            acceptPrivacy: "Примите политику конфиденциальности",
            failedToSend: "Не удалось отправить",
            successTitle: "Спасибо!",
            successMessage: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
            close: "Закрыть"
        },
        kg: {
            fillAllFields: "Бардык талааларды толтуруңуз",
            invalidEmail: "Туура эмес email",
            acceptPrivacy: "Купуялуулук саясатын кабыл алыңыз",
            failedToSend: "Жиберүү мүмкүн болбоду",
            successTitle: "Рахмат!",
            successMessage: "Сиздин кабарыңыз ийгиликтүү жиберилди. Жакында сиз менен байланышабыз.",
            close: "Жабуу"
        }
    };

    const currentMessages = messages[language as keyof typeof messages] || messages.ru;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        if (error) setError(null);
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.question.trim()) {
            setError(currentMessages.fillAllFields);
            return;
        }

        if (!validateEmail(formData.email)) {
            setError(currentMessages.invalidEmail);
            return;
        }

        if (!formData.privacyAccepted) {
            setError(currentMessages.acceptPrivacy);
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            await emailjs.send(
                "service_rqfx799",
                "template_b179jhr",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.question,
                    to_name: "Support Team",
                }
            );

            setFormData({
                name: "",
                email: "",
                question: "",
                privacyAccepted: false
            });
            setShowModal(true);

        } catch (error) {
            setError(currentMessages.failedToSend);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className={s.ContactBot}>
                <div className="container">
                    <div className={s.content}>
                        <form onSubmit={handleSubmit}>
                            <h1 style={{textWrap: "nowrap"}}>{t.contactTitle}</h1>
                            <p>{t.contactDescription}</p>

                            <input
                                type="text"
                                name="name"
                                placeholder={t.placeholderName}
                                value={formData.name}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder={t.placeholderEmail}
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />

                            <input
                                type="text"
                                name="question"
                                placeholder={t.placeholderQuestion}
                                value={formData.question}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />

                            <div className={s.check}>
                                <input
                                    type="checkbox"
                                    name="privacyAccepted"
                                    checked={formData.privacyAccepted}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                />
                                <p>{t.privacyPolicy}</p>
                            </div>

                            {error && (
                                <div style={{
                                    padding: "10px 15px",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                    fontSize: "14px",
                                    backgroundColor: "rgba(220, 53, 69, 0.1)",
                                    color: "#dc3545",
                                    border: "1px solid rgba(220, 53, 69, 0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px"
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                    </svg>
                                    {error}
                                </div>
                            )}

                            <button type="submit" className={'flex items-center justify-center'}
                                    disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                                         style={{animation: "spin 1s linear infinite"}}>
                                        <path
                                            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                            opacity=".25"/>
                                        <path
                                            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                                    </svg>
                                ) : (
                                    t.submitButton
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {showModal && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                    padding: "20px"
                }} onClick={closeModal}>
                    <div style={{
                        background: "linear-gradient(305.11deg, rgba(255, 255, 255, 0.95) -129.42%, rgba(255, 255, 255, 0.85) 76.25%)",
                        backdropFilter: "blur(20px)",
                        borderRadius: "24px",
                        padding: "40px 30px",
                        maxWidth: "500px",
                        width: "100%",
                        textAlign: "center",
                        position: "relative",
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                    }} onClick={e => e.stopPropagation()}>

                        {/* Success Icon */}
                        <div style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            backgroundColor: "#28a745",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 20px",
                            animation: "checkmark 0.6s ease-in-out"
                        }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                        </div>

                        <h2 style={{
                            fontFamily: "Montserrat",
                            fontWeight: "700",
                            fontSize: "24px",
                            color: "#333",
                            margin: "0 0 15px 0"
                        }}>
                            {currentMessages.successTitle}
                        </h2>

                        <p style={{
                            fontFamily: "Segoe UI",
                            fontSize: "16px",
                            color: "#666",
                            lineHeight: "1.5",
                            margin: "0 0 30px 0"
                        }}>
                            {currentMessages.successMessage}
                        </p>

                        <button
                            onClick={closeModal}
                            style={{
                                width: "100%",
                                padding: "15px 20px",
                                background: "#fce803",
                                border: "none",
                                borderRadius: "12px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                fontSize: "16px",
                                color: "#000",
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}
                            onMouseOver={(e: any) => e.target.style.transform = "translateY(-2px)"}
                            onMouseOut={(e: any) => e.target.style.transform = "translateY(0)"}
                        >
                            {currentMessages.close}
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes checkmark {
                    0% {
                        transform: scale(0);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
};

export default ContactBot;