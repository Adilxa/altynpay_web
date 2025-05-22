"use client";
import {useState, ChangeEvent, FormEvent} from "react";
import emailjs from "@emailjs/browser";
import {useTranslation} from "@/hooks/useTranslation";
import s from "./Form.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface FormData {
    name: string;
    email: string;
    question: string;
    privacyAccepted: boolean;
}

interface SubmitStatus {
    type: "success" | "error";
    message: string;
}

const Form: React.FC = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        question: "",
        privacyAccepted: false
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

    emailjs.init("99jSd3AsW_OB-cBIq");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.question.trim()) {
            setSubmitStatus({type: "error", message: "Fill all fields"});
            return;
        }

        if (!validateEmail(formData.email)) {
            setSubmitStatus({type: "error", message: "Invalid email"});
            return;
        }

        if (!formData.privacyAccepted) {
            setSubmitStatus({type: "error", message: "Accept privacy policy"});
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

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

            setSubmitStatus({type: "success", message: "Sent!"});
            setFormData({
                name: "",
                email: "",
                question: "",
                privacyAccepted: false
            });

        } catch (error) {
            setSubmitStatus({type: "error", message: "Failed to send"});
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header/>
            <section className={s.ContactBot}>
                <div className="container">
                    <div className={s.content}>
                        <form onSubmit={handleSubmit}>
                            <h1>{t.formTitle}</h1>

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

                            {submitStatus && (
                                <div style={{
                                    padding: "10px",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    fontSize: "14px",
                                    backgroundColor: submitStatus.type === "success" ? "#d4edda" : "#f8d7da",
                                    color: submitStatus.type === "success" ? "#155724" : "#721c24",
                                    border: `1px solid ${submitStatus.type === "success" ? "#c3e6cb" : "#f5c6cb"}`
                                }}>
                                    {submitStatus.type === "success" ? (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                                             style={{marginRight: "8px"}}>
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                                             style={{marginRight: "8px"}}>
                                            <path
                                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                        </svg>
                                    )}
                                    {submitStatus.message}
                                </div>
                            )}

                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                                             style={{marginRight: "8px", animation: "spin 1s linear infinite"}}>
                                            <path
                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                                opacity=".25"/>
                                            <path
                                                d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    t.formBtmn
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
            <style jsx>{`
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </>
    );
};

export default Form;