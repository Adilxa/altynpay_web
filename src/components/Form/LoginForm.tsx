'use client'

import React, {useState} from 'react';
import s from "./login.module.scss";
import {useTranslation} from "@/hooks/useTranslation";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [userRoles, setUserRoles] = useState<number[]>([]);
    const [showRoleSelection, setShowRoleSelection] = useState(false);
    const [error, setError] = useState('')

    const {t} = useTranslation()

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onLogin = async () => {
        try {
            const res = await axios.post("https://altynpay.org.kg/user/get_role", {email: formData.email})
            const roleData = res.data;

            if (roleData && roleData.role) {
                // Предполагаем, что роль может быть массивом или одним числом
                const roles = Array.isArray(roleData.role) ? roleData.role : [roleData.role];
                setUserRoles(roles);
                setShowRoleSelection(true);
            }

            return roleData;
        } catch (e: any) {
            setError(e.response.data.detail)
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await onLogin()
    };

    const handleRoleSelection = (selectedRole: number) => {
        switch (selectedRole) {
            case 1:
                window.location.href = 'https://admin.altynpay.kg/auth';
                break;
            case 2:
                // Для бухгалтера редирект не нужен, остаемся на текущей странице
                console.log('Вход как бухгалтер - остаемся на текущей странице');
                break;
            case 3:
                window.location.href = 'https://partner.altynpay.kg/auth';
                break;
            default:
                console.log('Неизвестная роль');
        }
    };

    const getRoleText = (role: number) => {
        switch (role) {
            case 1:
                return 'Админ';
            case 2:
                return 'Бухгалтер';
            case 3:
                return 'Партнер';
            default:
                return 'Неизвестная роль';
        }
    };

    const getRoleButtonClass = (role: number) => {
        switch (role) {
            case 1:
                return s.adminButton;
            case 2:
                return s.accountantButton;
            case 3:
                return s.partnerButton;
            default:
                return s.submitButton;
        }
    };

    if (showRoleSelection && userRoles.length > 0) {
        return (
            <div className={`${s.loginContainer}`}>
                <div className={s.formWrapper}>
                    <div className={s.loginForm}>
                        <h1 className={s.title}>{t.login}</h1>
                        <div className={s.roleSelection}>
                            {userRoles.map((role) => (
                                <button
                                    key={role}
                                    onClick={() => handleRoleSelection(role)}
                                    className={`${s.submitButton}`}
                                >
                                    {getRoleText(role)}
                                </button>
                            ))}
                        </div>
                        <div
                            className={'flex items-center justify-center cursor-pointer'}
                            onClick={() => setShowRoleSelection(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-square-arrow-left-icon lucide-square-arrow-left">
                                <rect width="18" height="18" x="3" y="3" rx="2"/>
                                <path d="m12 8-4 4 4 4"/>
                                <path d="M16 12H8"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${s.loginContainer}`}>
            <div className={s.formWrapper}>
                <div className={s.loginForm}>
                    <h1 className={s.title}>{t.login}</h1>

                    <form onSubmit={handleSubmit} className={s.form}>
                        <div className={s.inputGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={s.input}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={s.submitButton}
                        >
                            {t.login}
                        </button>
                        <h5 style={{color: "red"}}>{error}</h5>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;