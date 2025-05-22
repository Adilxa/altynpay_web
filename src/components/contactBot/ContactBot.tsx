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

interface SubmitStatus {
    type: "success" | "error";
    message: string;
}

const ContactBot: React.FC = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        question: "",
        privacyAccepted: false
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

    // Initialize EmailJS with your public key
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

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.question.trim()) {
            setSubmitStatus({type: "error", message: "Please fill in all fields"});
            return;
        }

        if (!validateEmail(formData.email)) {
            setSubmitStatus({type: "error", message: "Please enter a valid email address"});
            return;
        }

        if (!formData.privacyAccepted) {
            setSubmitStatus({type: "error", message: "Please accept the privacy policy"});
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                "service_rqfx799", // Your service ID
                "template_b179jhr", // Replace with your actual template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.question,
                    to_name: "Support Team", // You can customize this
                }
            );

            console.log("Email sent successfully:", result);
            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! We'll get back to you soon."
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                question: "",
                privacyAccepted: false
            });

        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
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

                        {submitStatus && (
                            <div className={`${s.status} ${s[submitStatus.type]}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : t.submitButton}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactBot;