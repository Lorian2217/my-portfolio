"use client"

import "../globals.css";

import link from '../../public/img/icons/chain-marker.png';

import vk from '../../public/img/logo/vk-logo.png';
import tg from '../../public/img/logo/tg-logo.png';
import max from '../../public/img/logo/max-logo.png';

import wheel from '../../public/img/mahoraga-wheel.png';

import Image from "next/image";
import { projects } from "../../projects";
import { useEffect, useState } from "react";

export default function InteractiveComponent() {
  const [visible, setVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    function trackScroll() {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        setVisible(true);
        setRotation(scrolled / 2);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", trackScroll);

    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  }, []);

  function goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="App">
      <section className="third-window window">
        <div className="wrapper">
          <div className="header flex flex-col items-center justify-center">
            <div className="md:w-2xl lg:w-4xl">
              <h1 className="h2 ff-SemiBold text-turquoise">Реализованные проекты</h1>
            </div>
            <div className="md:w-2xl">
              <h2 className="h3 text-white">Список проектов которые я реализовал или помогал в их разработке, продвижении</h2>
            </div>
          </div>
          <div className="body container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Для ограничения количества выводимых элементов, использовать slice(0, 6) вот так projects.slice(0, 6).map */}
            {projects.map((item, index) => (
              <div className="item" key={index}>
                <div className="flex items-start justify-between">
                  <Image src={item.image} alt={item.title} width={35} height={35}  />
                  <a href={item.link} rel="noreferrer" target="_blank" className="h6 text-white">
                    <Image src={link} alt={item.title} width={24} height={24} />
                  </a>
                </div>

                <div className="info">
                  <h3 className="h4 ff-Bold text-white">{item.title}</h3>
                  <span className="ff-Light text-white text-justify"> {item.description} </span>
                </div>

                <div className="features-list h5">
                  {item.features.map((feature, i) => (
                    <div key={i} className="h6 feature text-white">
                      {feature}
                    </div>
                  ))}
                </div>

                {item.note && (
                  <sub className="text-white">{item.note}</sub>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fourth-window">
        <div className="wrapper">
          <div className="header flex flex-col items-center justify-center">
            <div className="md:w-2xl lg:w-4xl">
              <h2 className="ff-SemiBold text-turquoise">Как связаться</h2>
            </div>
            <div className="md:w-2xl">
              <h3 className="text-white">Давайте вместе создадим продукты, которые изменят мир к лучшему</h3>
            </div>
          </div>
          <div className="body">
            <div className="flex flex-col md:flex-row items-start justify-center text-white gap-4 md:gap-x-8">
              <div className="size-full md:w-xl">
                <div className="links">
                  <h4>Меня можно найти здесь</h4>
                  <a href="https://max.ru/u/f9LHodD0cOJzi0W11t8UZ1PekS8EFQd3SP4Qmrp2pwIPIK_rT7PEs6qr_x8" target="_blank" rel="noreferrer" className="link text-white">
                    <div><Image src={max} alt="max" /></div>
                    <div>Max</div>
                  </a>
                  <a href="https://vk.com/sucun_sin" target="_blank" rel="noreferrer" className="link text-white">
                    <div><Image src={vk} alt="vk" /></div>
                    <div>Вконтакте</div>
                  </a>
                  <a href="https://t.me/Lorian2217" target="_blank" rel="noreferrer" className="link text-white">
                    <div><Image src={tg} alt="tg" /></div>
                    <div>Telegram</div>
                  </a>
                </div>
              </div>
              <div className="size-full md:w-xl">
                <div className="info">
                  <div className="text">
                    <span>Доступен для фриланс-проектов. Давайте обсудим, как будем сотрудничать!</span>
                  </div>
                  <a href="tel:+79397091744" className="btn btn-call d-block h3 text-dark rounded-sm">Связаться со мной</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`page_up ${visible ? "active" : ""}`} onClick={goTop} style={{ transform: `rotate(${rotation}deg)` }} >
        <Image src={wheel} alt="Наверх" />
      </section>
    </div>
  );
}