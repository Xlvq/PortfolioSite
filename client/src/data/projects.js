import frame from '../assets/Frame.png';

export default [
  {
    id: 'p1',
    name: 'FinanceBOT',
    desc: 'Telegram-бот для учёта личных финансов и платных подписок.',
    img: frame,
    stack: ['Python', 'Aiogram', 'SQLite', 'Docker'],
    details: `
FinanceBOT — Telegram-бот, который помогает вести личные финансы прямо в чате.

 Основные возможности
• **Учёт операций** — добавление доходов/расходов, просмотр баланса, история транзакций.  
• **Бюджет и цели** — установка месячного лимита, отслеживание прогресса по целям.  
• **Отчётность** — сводка за период, графики, экспорт в CSV.  
• **Платная подписка** — проверка платежей, напоминания о продлении.

 Технологии
– Python 3.12, Aiogram 3  
– СУБД SQLite + SQLModel  
– Docker-образ для деплоя  
– CI / CD: GitHub Actions → Docker Hub
    `.trim(),
    gh: 'https://github.com/Xlvq/FinanceBOT',
    demo: 'https://t.me/financial_diary_bot'
  },

  {
    id: 'p2',
    name: 'Classic Coffee',
    desc: 'Telegram-бот для предварительного заказа кофе без очереди.',
    img: frame,
    stack: ['Python', 'Aiogram', 'PostgreSQL'],
    details: `
Classic Coffee позволяет сделать заказ напитка заранее, чтобы прийти к уже готовому стаканчику.

 Функции
• Меню с фотографиями и ценами.  
• Оплата через Telegram Pay.  
• Уведомления «Ваш напиток готов».  
• Панель бариста (Web-app) для отметки статуса.

 Стек
Python / Aiogram • FastAPI для админ-API • PostgreSQL • Docker Compose.
    `.trim(),
    gh: 'https://github.com/Xlvq/Coffee',
    demo: 'https://t.me/ClassicCoffee_bot'
  },

  {
    id: 'p3',
    name: 'Школьный дневник-бот',
    desc: 'Электронный дневник в Telegram: оценки, уведомления, статистика.',
    img: frame,
    stack: ['Python', 'Aiogram', 'MongoDB'],
    details: `
Telegram-бот полностью заменяет классический электронный дневник.

* Авторизация ученика по токену.  
* Таблица оценок, средний балл по предметам.  
* Push-уведомления о новых отметках.  
* Статистика успеваемости и график за четверть.

Архитектура на Aiogram 3 с Router-модулями, асинхронный MongoDB-драйвер, тесты на PyTest.
    `.trim(),
    gh: 'https://github.com/Xlvq/DNEVNIK',
    demo: 'https://t.me/My_schoool_Journal_Bot'
  }
];
