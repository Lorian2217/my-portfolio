"use client"

import "../globals.css";

import link from '../../public/img/icons/chain-marker.png';
import phone from '../../public/img/icons/phone-marker.png';
import post from '../../public/img/icons/post-marker.png';

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
      <section className="first-window window">
        <div className="wrapper">
          <h1 className="ff-SemiBold text-white">Danila Mohnatkin</h1>
          <span className="post ff-Light text-white">Full-Stack Developer & Digital Craftsman</span>
          <div className="tools-list">
            <div className="item">Wordpress</div>
            <div className="item">Joomla</div>
            <div className="item">1C-Bitrix</div>
            <div className="item">PHP</div>
            <div className="item">Laravel</div>
            <div className="item">Evolution</div>
            <div className="item">JavaScript</div>
            <div className="item">Vue.js</div>
            <div className="item">React.js</div>
            <div className="item">Node.js</div>
          </div>
          <div className="btn-list ff-SemiBold">
            <a href="tel:+79397091744" className="text-white">
              <Image src={phone} alt="phone" loading="eager" />
              Связаться
            </a>
            <a href="mailto:lorian2221@yandex.ru" className="text-white">
              <Image src={post} alt="download" />
              <span>lorian2221@yandex.ru</span>
            </a>
          </div>
        </div>
      </section>

      <section className="second-window window">
          <div className="wrapper">
              <div className="header flex flex-col items-center justify-center">
                  <div className="md:w-2xl lg:w-4xl">
                    <h2 className="ff-SemiBold text-turquoise">Превращаю ваши идеи в огранённые решения</h2>
                  </div>
                  <div className="md:w-2xl">
                      <h3 className="text-white">Я увлечён созданием элегантных решений, которые решают реальные проблемы пользователей</h3>
                  </div>
              </div>
              {/* Переделать на вывод из массива, через foreach */}
              <div className="body container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <div className="item">
                      <h4 className="ff-Bold text-white">Методология БЭМ</h4>
                      <span className="h5 ff-Light text-white text-justify">В своих проектах опираюсь на методологии Яндекса, делая их структурированными и понятными для других разработчиков</span>
                  </div>
                  <div className="item">
                      <h4 className="ff-Bold text-white">Pixel Perfect</h4>
                      <span className="h5 ff-Light text-white text-justify">Всегда стремлюсь чётко следовать макету, чтобы итоговый результат совпадал максимально точно, «пиксель в пиксель»</span>
                  </div>
                  <div className="item">
                      <h4 className="ff-Bold text-white">ООП</h4>
                      <span className="h5 ff-Light text-white text-justify">При написании кода стараюсь следовать парадигмам ООП, чтобы он был читаемым, понятным и легко расширяемым</span>
                  </div>
                  <div className="item">
                      <h4 className="ff-Bold text-white">Чистый кодинг</h4>
                      <span className="h5 ff-Light text-white text-justify">Не допускаю в своих работах «спагетти-код», пишу масштабируемые решения с использованием передовых современных методов </span>
                  </div>
                  <div className="item">
                      <h4 className="ff-Bold text-white">Оптимизация</h4>
                      <span className="h5 ff-Light text-white text-justify">Умею оптимизировать уже разработанные проекты, уменьшая нагрузку и значительно увеличивая скорость их работы</span>
                  </div>
                  <div className="item">
                      <h4 className="ff-Bold text-white">Интеграции</h4>
                      <span className="h5 ff-Light text-white text-justify">Помимо разработки также способен подключать и настраивать к сайтам интеграции с различными CRM системами</span>
                  </div>
                  <div className="item">
                      <h4 className="ff-Bold text-white">Опыт работы с CMS</h4>
                      <span className="h5 ff-Light text-white text-justify">Имею опыт работы с большим количеством CMS, способен добавлять новый или дорабатывать существующий функционал</span>
                  </div>
                  <div className="item">
                      <h4 className="ff-Bold text-white">Открыт к новому</h4>
                      <span className="h5 ff-Light text-white text-justify">Всегда готов учиться чему-то новому, с удовольствием осваиваю новые инструменты и методы, готов перестроиться под вас</span>
                  </div>
              </div>
          </div>
      </section>

      <section className="third-window window">
        <div className="wrapper">
          <div className="header flex flex-col items-center justify-center">
            <div className="md:w-2xl lg:w-4xl">
              <h2 className="ff-SemiBold text-turquoise">Проекты</h2>
            </div>
            <div className="md:w-2xl">
              <h3 className="text-white">Список проектов которые я реализовал или помогал в их разработке, продвижении</h3>
            </div>
          </div>
          <div className="body container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.slice(0, 10).map((item, index) => (
              <div className="item" key={index}>
                <div className="flex items-start justify-between">
                  <Image className="w-auto" src={item.image} alt={item.title} width={100} height={40} quality={90} />
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
            <div className="item">
              <div className="flex flex-col items-center justify-end h-full gap-y-8">
                <h3 className="h4 ff-Bold text-white">Хотите посмотреть все проекты?</h3>
                <a href="/projects" className="flex items-center justify-center w-full bg-yellow h3 text-white rounded-sm py-2">Перейти</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrapper">
          <div className="header flex flex-col items-center justify-center">
            <div className="md:w-2xl lg:w-4xl">
              <h2 className="ff-SemiBold text-turquoise">Услуги</h2>
            </div>
            <div className="md:w-2xl">
              <h3 className="text-white">Стоимость и сроки обговариваются с каждым клиентом индивидуально, в списке указана стартовая цена</h3>
            </div>
          </div>
          <div className="body">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-start gy-4 mx-0">
              <div className="column">
                <div className="item">
                  <span className="h4">Вёрстка сайта</span>
                  <span className="price ff-SemiBold">от 50 000 руб.</span>
                  <span className="h5">Профессиональная вёрстка сайта с учётом современных стандартов и полной адаптивности под любые устройства. Гарантирую чистый код, быструю загрузку и точное соответствие дизайну, чтобы ваш проект выглядел и работал безупречно.</span>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <span className="h4">Тех. сопровождение</span>
                  <span className="price ff-SemiBold">от 30 000 руб.</span>
                  <span className="h5">Обеспечение технического сопровождения сайта, поддерживая его стабильную работу и актуальность. Оперативно устраняю ошибки, обновляю функционал и слежу за безопасностью, чтобы ваш проект работал без сбоев.</span>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <span className="h4">SEO-оптимизация</span>
                  <span className="price ff-SemiBold">от 20 000 руб.</span>
                  <span className="h5">SEO-правки по сайту, согласно ТЗ от вашего SEO-специалиста. Оптимизация структуры, метаданных и технических элементов, с целью повысить позиции и привлечь больше целевого трафика.</span>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <span className="h4">SEO-продвижение</span>
                  <span className="price ff-SemiBold">от 40 000 руб.</span>
                  <span className="h5">SEO-продвижение сайта, повышение его позиций в поисковых системах и увеличение потока целевого трафика. Анализ ниши, подбор стратегии и комплексная оптимизация сайта для достижения стабильного роста.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-window">
        <div className="wrapper">
          <div className="header row flex-column align-items-center justify-content-center mx-0">
            <div className="col-12">
              <h2 className="ff-SemiBold text-turquoise">Как связаться</h2>
            </div>
            <div className="col-xl-8">
              <h3 className="text-white">Давайте вместе создадим продукты, которые изменят мир к лучшему</h3>
            </div>
          </div>
          <div className="body">
            <div className="flex flex-col md:flex-row items-start justify-center text-white gap-4 md:gap-x-8 mx-0">
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
                  {/* <a href="https://togliatti.hh.ru/resume/1b86eea9ff08d802860039ed1f6e5970557552" target="_blank" rel="noreferrer" className="link text-white">
                      <div><img src={hh} alt="download" /></div>
                      <div>hh.ru</div>
                  </a> */}
                </div>
              </div>
              <div className="size-full md:w-xl">
                <div className="info">
                  <div className="text">
                    <span>Доступен для фриланс-проектов. Давайте обсудим, как будем сотрудничать!</span>
                  </div>
                  <a href="tel:+79397091744" className="btn btn-call d-block h3 text-dark rounded-sm">Связаться со мной</a>
                  {/* <button className="btn btn-call h3 text-dark" data-bs-toggle="modal" data-bs-target="#fos">Связаться со мной</button> */}
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