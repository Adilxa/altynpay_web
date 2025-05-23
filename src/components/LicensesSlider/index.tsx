'use client'

import React, {useState} from 'react';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import FIRST from "../../assets/images/licenses/first.png";
import SECOND from "../../assets/images/licenses/second.png"
import THIRTH from "../../assets/images/licenses/thirth.png"
import FOURTH from "../../assets/images/licenses/fourth.png"
import Image from "next/image";
import {StaticImageData} from 'next/image';
import {useTranslation} from "@/hooks/useTranslation";

// Стрелка влево SVG
const ChevronLeftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Стрелка вправо SVG
const ChevronRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Helper function to get image source string for PhotoView
const getImageSrc = (image: string | StaticImageData): string => {
    return typeof image === 'string' ? image : image.src;
};

const LicensesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const {t} = useTranslation()

    const images = [
        {src: FIRST, alt: "Лицензия 1"},
        {src: SECOND, alt: "Лицензия 2"},
        {src: THIRTH, alt: "Лицензия 3"},
        {src: FOURTH, alt: "Лицензия 4"}
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id={'licenses'} className="py-24 text-white container flex flex-col gap-5">
            <div className="w-full mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 flex items-center flex-col">
                    <span
                        style={{padding: "15px 20px", color: "#ffeb3b", marginBottom: "10px"}}
                        className="inline-block bg-yellow-500/10 border border-white/10 text-yellow-400 px-5 py-4 rounded-full text-lg mb-2.5 w-64">
                        {t.ourDocuments}
                    </span>
                    <h2 style={{marginBottom: "25px"}} className="text-4xl md:text-5xl font-bold leading-tight m-0">
                        {t.licenses}
                    </h2>
                </div>

                {/* Slider */}
                <div className="relative flex items-center flex-col p-8 text-white">
                    {/* Image Section */}
                    <div style={{marginBottom: "20px"}} className="w-full flex items-center justify-center">
                        <PhotoProvider>
                            <PhotoView src={getImageSrc(images[currentSlide].src)}>
                                <div
                                    className="w-full flex items-center justify-center border border-white/13 rounded-3xl md:rounded-[40px] bg-gradient-to-br from-white/5 to-yellow-500/5 cursor-pointer transition-transform duration-300 p-4 relative">
                                    <div className="w-full relative" style={{height: '500px'}}>
                                        <Image
                                            src={images[currentSlide].src}
                                            alt={images[currentSlide].alt}
                                            fill
                                            className="object-contain rounded-2xl"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                        />
                                    </div>
                                </div>
                            </PhotoView>
                        </PhotoProvider>
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex items-center justify-between w-full">
                        {/* Controls */}
                        <div className="flex items-center gap-2">
                            <div
                                onClick={prevSlide}
                                className="flex items-center cursor-pointer justify-center bg-transparent border border-white rounded-full w-9 h-9 text-white cursor-pointer hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeftIcon/>
                            </div>
                            <div
                                onClick={nextSlide}
                                className="flex items-center cursor-pointer justify-center bg-transparent border border-white rounded-full w-9 h-9 text-white cursor-pointer hover:bg-white/10 transition-colors"
                            >
                                <ChevronRightIcon/>
                            </div>
                        </div>

                        {/* Counter */}
                        <div className="text-2xl font-bold">
                            {String(currentSlide + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LicensesSlider;