import React from 'react';
import {useTranslation} from "@/hooks/useTranslation";

interface Props {
    link?: string;
    text: string;
}

const Button: React.FC<Props> = ({link, text}) => {

    const {t} = useTranslation();

    return (
        <button className={'text-[#101318] font-extrabold text-[20px] bg-[#FCE803] p'}>
            {t.about}
        </button>
    );
};

export default Button;