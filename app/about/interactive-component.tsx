"use client" 

import "../globals.css";

import vk from '../../public/img/logo/vk-logo.png';
import tg from '../../public/img/logo/tg-logo.png';
import max from '../../public/img/logo/max-logo.png';

import kokushibo from '../../public/img/About/selfie.png';

import Image from "next/image";

export default function InteractiveComponent() {
  return (
    <div className="App">
      <section className="about-header window">
        <div className="flex flex-col md:flex-row items-center justify-center text-white gap-4 md:gap-x-8 px-4 md:px-0">
          <div className="size-full md:w-2xl">
            <div className="desc">
              <h1>Обо мне</h1>
              <p>
                  <span>Разработчик, увлечённый созданием удобных и современных веб-приложений. Постоянно развиваюсь и изучаю новые технологии. </span>
                  <span>Создаю интерфейсы, которые приятно использовать. Люблю решать сложные задачи и превращать идеи в работающие продукты.</span>
              </p>
            </div>
          </div>
          <div className="size-full md:w-2xl">
            <Image src={kokushibo} alt="Профиль" loading="eager" />
          </div>
        </div>
      </section>

      <section className="about-info">
        <div className="wrapper">
          <div className="header">
            <h2 className="text-turquoise">Моя история</h2>
          </div>
          <div className="body">
            <div className="flex flex-col md:flex-row items-start justify-center text-white gap-4 md:gap-x-8 px-4 md:px-0">
              <div className="size-full md:w-xl">
                <div className="info">
                  <h3 className="pb-3 text-center">Начало пути</h3>
                  <p>Моё увлечение веб-разработкой началось ещё в школе, когда я впервые попробовал создавать свои сайты. Сначала это были простые страницы с HTML и CSS, но уже тогда я понял, как интересно превращать идеи в что-то, что реально работает и видимо пользователю. Каждый новый проект давал маленькие победы и одновременно учил меня решать проблемы, которые на первый взгляд казались сложными.</p>
                  <p>С течением времени я погрузился в JavaScript и современные фреймворки, такие как React, и понял, что программирование — это не только про код, но и про логику, дизайн и удобство для людей. Создание интерфейсов, которые не просто работают, а приносят удовольствие пользователю, стало для меня настоящей целью.</p>
                  <p>Я постоянно учусь новым технологиям, тестирую разные подходы и стараюсь делать свои проекты максимально чистыми и понятными. Для меня важно не просто «сделать сайт», а сделать продукт, который решает реальные задачи и оставляет позитивный опыт для людей, которые им пользуются.</p>
                  <p>Каждый новый проект — это возможность попробовать что-то новое, улучшить навыки и внести в мир свой маленький вклад. Я вижу веб-разработку как бесконечный путь развития, где каждая задача — это шанс стать лучше, а каждая идея — шанс превратить её в работающий и красивый продукт.</p>
                </div>
              </div>
              <div className="size-full md:w-xl">
                <h3 className="pb-3">Мои достижения</h3>
                <ul className="achievements text-start">
                  <li className="achievement text-white">Окончил Колледж гуманитарных и социально-педагогических дисциплин имени Святителя Алексия, Митрополита Московского</li>
                  <li className="achievement text-white">Завершил курс <a href="https://stepik.org/cert/240384" rel="noreferrer" target="_blank">Введение в Linux</a></li>
                  <li className="achievement text-white">Завершил курс <a href="https://stepik.org/cert/878333" rel="noreferrer" target="_blank">JavaScript для начинающих</a></li>
                  <li className="achievement text-white">Завершил курс <a href="https://stepik.org/cert/897836" rel="noreferrer" target="_blank">Интерактивный тренажёр по SQL</a></li>
                  <li className="achievement text-white">Завершил курс Основы работы с базами данных и SQL</li>
                  <li className="achievement text-white">Завершил курс Основы работы с Git</li>
                  <li className="achievement text-white">Занял второе место в <a href="/docs/Mockhnatkin_2_mesto.pdf" rel="noreferrer" target="_blank">IV Региональной молодёжной научно-практической конференции «Поволжский фестиваль студенческой науки»</a></li>
                </ul>
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
    </div>
  );
}