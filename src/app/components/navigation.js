"use client";
import React, { useEffect, useState } from "react";
import { NAV } from "../components/data/nav";

const Navigation = () => {
    const [active, setActive] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8, 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="sticky top-0 w-full flex justify-evenly items-center bg-slate-400 z-50">
            {NAV.map((item, index) => (
                <div
                    key={index}
                    className={`p-2 ${active === item.name.toLowerCase() ? "bg-blue-500 text-white" : ""}`}
                >
                    <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
                </div>
            ))}
        </div>
    );
};

export default Navigation;
