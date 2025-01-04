import React from "react";
import "./About.css";


const About = () => {

    return (
        <div className="about-container">
            <h1 className="about-title">За Макции</h1>
            <p className="about-description">
                Макции е веб апликација која ги обработува податоците за издавачите во последните 10 години, собрани од официјалната веб страница на Македонската Берза (
                <a className={"about-a"} href="https://www.mse.mk/" target="_blank" rel="noopener noreferrer">
                    mse.mk
                </a>
                ). Нашата цел е да создадеме лесна и интуитивна алатка која ќе биде корисна за различни типови на корисници – од статистичари и актуари, до инвеститори и љубители на македонските компании.
            </p>
            <h2 className="about-subtitle">Што нуди Макции?</h2>
            <ul className="about-list">
                <li>Сумирани статистики за издавачите на Македонската Берза.</li>
                <li>Графички визуелизации кои овозможуваат полесно разбирање на податоците.</li>
                <li>Функционалности за филтрирање по временски период и компанија.</li>
                <li>Предвремени предвидувања базирани на ML модел за идните движења на берзата.</li>
            </ul>
            <h2 className="about-subtitle">Кому е наменета?</h2>
            <p className="about-description">
                Оваа апликација е наменета за сите кои сакаат да:
                <ul className="about-list">
                    <li>Инвестираат во македонски компании.</li>
                    <li>Спроведат детална статистичка анализа на финансиските податоци.</li>
                    <li>Добијат јасна слика за состојбата на македонската берза преку визуелизации.</li>
                </ul>
            </p>
            <h2 className="about-subtitle">Нашата мисија</h2>
            <p className="about-description">
                Нашата мисија е да ја направиме финансиската анализа достапна за секого, овозможувајќи им на корисниците да носат информирани одлуки базирани на статистики и предвидувања.
            </p>
        </div>
    );
};

export default About;
