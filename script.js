'use strict';

const english = {
  'skip': 'Skip to content', 'navigation': 'Main navigation',
  'nav.projects': 'Projects', 'nav.services': 'What I do', 'nav.process': 'How I work', 'nav.contact': 'Let’s talk',
  'hero.eyebrow': 'Independent developer · From start to launch',
  'hero.line1': 'Your idea.', 'hero.line2': 'My job to', 'hero.line3': 'build it.',
  'hero.description': 'I build websites, apps and Telegram Mini Apps. I connect AI to your tools and automate work that takes up your time.',
  'hero.note': 'From the first sketch to launch and support', 'hero.visual': 'Examples of products I have developed',
  'hero.label': 'Less busywork. More business.', 'hero.kiki': 'See it. Choose it.', 'tag.web': 'Website',
  'hero.booking': 'YOUR NEXT WAVE', 'hero.surf': 'See you\nin the ocean.', 'hero.lesson': 'Group surf lesson', 'hero.book': 'Choose a lesson',
  'hero.chakiLabel': 'BOOKING WITHOUT THE BACK-AND-FORTH', 'hero.stamp': 'Built.\nWorking.',
  'hero.caption': 'Real projects. Different challenges. One developer.',
  'cta.discuss': 'Let’s talk about your project', 'cta.works': 'Explore the work', 'cta.case': 'View case study',
  'strip.label': 'Projects in action', 'strip.link': 'Meet the projects',
  'projects.eyebrow': '01 / Selected work', 'projects.title': 'Behind every interface,\na real problem solved.',
  'projects.intro': 'Book a surf lesson. Find somewhere to eat. Take control of a busy schedule. Here’s what I build.',
  'case.soul.aria': 'Read the Soul Temple case study', 'case.soul.category': 'Sports · Booking platform',
  'case.soul.preview': 'Your next\nwave starts\nhere.', 'case.soul.previewBottom': 'Surfing with soul.',
  'case.soul.summary': 'Lesson booking and school operations in one service: students, instructors, groups and notifications.',
  'case.kiki.aria': 'Read the Kiki Eats case study', 'case.kiki.category': 'Foodtech · Places & photo menus',
  'case.kiki.summary': 'Discover cafés on a map and see dishes photographed by guests. A website and Mini App for choosing with your eyes.',
  'case.chaki.aria': 'Read the Chaki Massage case study', 'case.chaki.category': 'Wellness · Booking automation',
  'case.chaki.calendar': 'Schedule', 'case.chaki.session': 'Massage session', 'case.chaki.free': 'Available time',
  'case.chaki.notice': 'New booking', 'case.chaki.noticeCaption': 'Telegram notification',
  'case.chaki.illustration': 'Interface illustration · No client data',
  'case.chaki.summary': 'A massage practice schedule. Bookings through a bot and Mini App, an admin calendar and easy rescheduling.',
  'services.eyebrow': '02 / How I can help', 'services.title': 'Your next step.\nMy responsibility.',
  'services.intro': 'Bring an idea on a napkin or a detailed brief. We’ll work out what your business actually needs.',
  'service.web.title': 'Websites &\nweb applications',
  'service.web.description': 'From a page introducing your business to a full service with accounts, a catalogue and an admin workspace.',
  'service.web.tag1': 'Landing pages', 'service.web.tag2': 'MVPs & platforms', 'service.web.tag3': 'Integrations & APIs',
  'service.mobile.title': 'Apps &\nTelegram Mini Apps',
  'service.mobile.description': 'Your product in your customer’s pocket: booking, ordering, a catalogue or loyalty programme. The format follows your audience.',
  'service.mobile.tag1': 'Mobile apps', 'service.mobile.tag3': 'Telegram bots',
  'service.ai.title': 'AI & workflow\nautomation',
  'service.ai.description': 'Connect AI to your data and tools. Spend less time manually processing enquiries, documents and repetitive tasks.',
  'service.ai.tag1': 'AI assistants', 'service.ai.tag2': 'Data workflows', 'service.ai.tag3': 'Automation',
  'stack.label': 'Tools for the task', 'stack.end': 'A result for people.',
  'process.eyebrow': '03 / From a conversation to a release', 'process.title': 'One point of contact.\nAll the way to launch.',
  'process.intro': 'Talk directly to the person building your product. I learn how your business works, share progress and stay in touch.',
  'process.step1.title': 'Understand the problem',
  'process.step1.text': 'What should become easier for you and your customers? We’ll discuss the workflows, constraints and essentials for version one.',
  'process.step2.title': 'Agree on a plan',
  'process.step2.text': 'Define the scope, milestones, timeline and cost. Before development begins, you’ll know what to expect.',
  'process.step3.title': 'Build and test',
  'process.step3.text': 'You’ll see working versions throughout the project. We test the main journeys and refine the details in a real interface.',
  'process.step4.title': 'Launch and support',
  'process.step4.text': 'I deploy the product, help you get started and hand over the source code. We agree on support to fit your project.',
  'faq.eyebrow': '04 / Before your first message', 'faq.title': 'Good questions.', 'faq.intro': 'Have another one?\nLet’s talk on Telegram.',
  'faq.q1': 'How much does development cost?',
  'faq.a1': 'It depends on the workflows, integrations and scope of the first release. After discussing your project, I’ll propose a scope and estimate. We can start with a small MVP and build on it.',
  'faq.q2': 'I only have an idea. Where do we start?',
  'faq.a2': 'Tell me what your business does and what you want to make easier. You don’t need a technical brief: I’ll help define the requirements and choose the right product format.',
  'faq.q3': 'Can you improve an existing project?',
  'faq.a3': 'Yes. I’ll first review the application and code to understand the scope. Then I’ll propose a plan for fixes, new features, integrations or interface improvements.',
  'faq.q4': 'What happens after launch?',
  'faq.a4': 'I hand over the source code and the information you need to run the product. We can include support, updates and further development in an agreed maintenance plan.',
  'contact.eyebrow': 'Your project could be next', 'contact.availability': 'Open to new projects',
  'contact.title': 'Let’s build\nsomething useful.', 'contact.description': 'Tell me about your idea, business or challenge.\nIt starts with a conversation.',
  'contact.aria': 'Discuss your project on Telegram', 'contact.note': 'Directly with your developer. No extra layers.',
  'footer.caption': 'Ideas become products.',
  'dialog.eyebrow': 'Project / 2026', 'dialog.close': 'Close case study', 'dialog.task': 'The challenge',
  'dialog.done': 'What I built', 'dialog.stack': 'Technology', 'dialog.similar': 'Let’s build something like this'
};

const cases = {
  soul: {
    name: 'Soul Temple', url: 'https://soultemple.ru/', stack: ['React', 'TypeScript', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Telegram Bot API'],
    ru: { category: 'Спорт · Школа сёрфинга · Шри-Ланка', lead: 'Сайт и Telegram Mini App для записи на сёрфинг. Отдельное рабочее пространство для команды школы.', task: 'Объединить клиентскую запись, расписание тренеров и управление группами. Дать клиенту понятный путь от выбора занятия до подтверждения, а сотрудникам — единое место для работы с расписанием.', features: ['Запись в три шага: формат занятия, дата и время, подтверждение.', 'Просмотр, отмена и перенос собственных записей.', 'Админка с расписанием, тренерами, учениками и постоянными группами.', 'Учёт вместимости и защита от одновременной записи на последнее место.', 'Уведомления менеджерам и тренерам в Telegram, журнал доставки и действий.'], link: 'Открыть сайт проекта' },
    en: { category: 'Sports · Surf school · Sri Lanka', lead: 'A website and Telegram Mini App for booking surf lessons. A separate workspace for the school’s team.', task: 'Bring customer bookings, instructor schedules and group management together. Give customers a clear path from choosing a lesson to confirmation, and staff one place to manage the schedule.', features: ['Three-step booking: lesson format, date and time, confirmation.', 'View, cancel and reschedule your own bookings.', 'An admin workspace for schedules, instructors, students and recurring groups.', 'Capacity checks and protection against simultaneous bookings for the last place.', 'Telegram notifications for managers and instructors, with delivery and activity logs.'], link: 'Visit the project' }
  },
  kiki: {
    name: 'Kiki Eats', url: 'https://kikieats.ru/', stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'S3', 'Telegram Mini Apps'],
    ru: { category: 'Foodtech · Kiki Project · Шри-Ланка', lead: 'Сайт и Telegram Mini App с каталогом ресторанов и фотографиями блюд от гостей. Первый запуск — южное побережье Шри-Ланки.', task: 'Помочь выбрать ресторан и блюдо по реальным фотографиям. Объединить поиск мест, карту, меню и пользовательские снимки в одном продукте, а для команды сделать инструменты управления и модерации.', features: ['Каталог заведений списком и на карте, поиск и выбор ближайших мест.', 'Меню по категориям с фотографиями блюд от гостей.', 'Добавление блюд и фотографий, публикация и модерация контента.', 'Telegram-авторизация в Mini App и обычном браузере.', 'Админка заведений и меню; фотографии в S3-хранилище.'], link: 'Открыть Kiki Eats' },
    en: { category: 'Foodtech · Kiki Project · Sri Lanka', lead: 'A website and Telegram Mini App with restaurant listings and guest photos of dishes. First launched on Sri Lanka’s south coast.', task: 'Help people choose a restaurant and a dish using real photos. Bring places, maps, menus and user submissions into one product, with management and moderation tools for the team.', features: ['Places in a list or on a map, with search and nearby discovery.', 'Categorised menus with dishes photographed by guests.', 'Dish and photo submissions with publishing and moderation workflows.', 'Telegram sign-in in the Mini App and a regular browser.', 'An admin workspace for restaurants and menus, with S3 photo storage.'], link: 'Explore Kiki Eats' }
  },
  chaki: {
    name: 'Chaki Massage', url: 'https://t.me/chaki_massage_bot', stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker', 'Telegram Bot API'],
    ru: { category: 'Wellness · Массажная практика · Пилот', lead: 'Общее расписание для администратора, Telegram-бота и Mini App. Все интерфейсы работают с одним сервисом записи.', task: 'Собрать свободные интервалы и записи в едином календаре. Дать клиенту самостоятельную запись, а администратору — возможность удобно управлять рабочим днём и изменениями.', features: ['Календарь с видами дня и недели, созданием и блокировкой свободных интервалов.', 'Запись клиента через Telegram-бота, Mini App или вручную администратором.', 'Перенос, копирование и отмена сеансов; перетаскивание записей на компьютере.', 'Проверка пересечений и защита от двойного бронирования.', 'Уведомления администратору о новых записях в Telegram.'], link: 'Открыть Telegram-бота' },
    en: { category: 'Wellness · Massage practice · Pilot', lead: 'A shared schedule for an administrator, a Telegram bot and a Mini App. All interfaces use one booking service.', task: 'Bring availability and bookings into a single calendar. Let customers book on their own, while giving the administrator a convenient way to manage the working day and schedule changes.', features: ['Day and week calendar views, with tools to create and block available times.', 'Bookings through a Telegram bot, a Mini App or manual admin entry.', 'Reschedule, copy and cancel sessions; drag-and-drop on desktop.', 'Overlap checks and protection against double booking.', 'Telegram notifications to the administrator for new bookings.'], link: 'Open the Telegram bot' }
  }
};

const translatedNodes = [...document.querySelectorAll('[data-i18n]')];
const translatedLabels = [...document.querySelectorAll('[data-i18n-aria]')];
const russian = new Map(translatedNodes.map(node => [node, [...node.childNodes].map(child => child.nodeName === 'BR' ? '\n' : child.textContent).join('')]));
const russianLabels = new Map(translatedLabels.map(node => [node, node.getAttribute('aria-label')]));
const languageButton = document.querySelector('.language-switch');
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');
const dialog = document.querySelector('#case-dialog');
let activeCase = null;
let language = 'ru';

function putText(node, value) {
  const lines = value.split('\n');
  node.replaceChildren(...lines.flatMap((line, index) => index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
}

function renderCase(key) {
  const project = cases[key];
  const content = project[language];
  document.querySelector('#dialog-title').textContent = project.name;
  document.querySelector('#dialog-category').textContent = content.category;
  document.querySelector('#dialog-lead').textContent = content.lead;
  document.querySelector('#dialog-task').textContent = content.task;
  document.querySelector('#dialog-features').replaceChildren(...content.features.map(text => {
    const item = document.createElement('li'); item.textContent = text; return item;
  }));
  document.querySelector('#dialog-stack').replaceChildren(...project.stack.map(text => {
    const tag = document.createElement('span'); tag.textContent = text; return tag;
  }));
  document.querySelector('#dialog-project-link').href = project.url;
  document.querySelector('#dialog-project-label').textContent = content.link;
}

function setMenu(open) {
  mobileMenu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', language === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? 'Закрыть меню' : 'Открыть меню'));
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language;
  translatedNodes.forEach(node => putText(node, language === 'en' ? (english[node.dataset.i18n] ?? russian.get(node)) : russian.get(node)));
  translatedLabels.forEach(node => node.setAttribute('aria-label', language === 'en' ? (english[node.dataset.i18nAria] ?? russianLabels.get(node)) : russianLabels.get(node)));
  languageButton.textContent = language === 'ru' ? 'EN' : 'RU';
  languageButton.setAttribute('aria-label', language === 'ru' ? 'Switch to English' : 'Переключить на русский');
  languageButton.title = languageButton.getAttribute('aria-label');
  document.title = language === 'ru' ? 'CHERDAKOV — сайты, приложения и автоматизация' : 'CHERDAKOV — websites, apps & automation';
  const description = language === 'ru'
    ? 'Разработка сайтов, веб-приложений, Telegram Mini Apps и AI-интеграций. Реальные проекты: Soul Temple, Kiki Eats и Chaki Massage. От идеи до запуска и поддержки.'
    : 'Websites, web apps, Telegram Mini Apps and AI integrations. Real projects: Soul Temple, Kiki Eats and Chaki Massage. From an idea to launch and support.';
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:locale"]').content = language === 'ru' ? 'ru_RU' : 'en_US';
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('.brand').setAttribute('aria-label', language === 'ru' ? 'CHERDAKOV — главная' : 'CHERDAKOV — home');
  mobileMenu.setAttribute('aria-label', language === 'ru' ? 'Мобильная навигация' : 'Mobile navigation');
  document.querySelectorAll('.mini-week span').forEach((node, index) => { node.textContent = (language === 'en' ? ['MO','TU','WE','TH','FR','SA','SU'] : ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'])[index]; });
  document.querySelectorAll('.calendar-days > span').forEach((node, index) => {
    node.firstChild.textContent = (language === 'en' ? ['MO','TU','WE','TH','FR'] : ['ПН','ВТ','СР','ЧТ','ПТ'])[index];
  });
  const imageDescriptions = language === 'en'
    ? ['A bowl from the Kiki Eats demo menu','A Soul Temple surfer','Soul Temple surf school','Kiki Eats: café and restaurant listings','Kiki Eats: a restaurant photo menu']
    : ['Боул из демонстрационного меню Kiki Eats','Сёрфер школы Soul Temple','Школа сёрфинга Soul Temple','Kiki Eats: каталог кафе и ресторанов','Kiki Eats: фотоменю ресторана'];
  document.querySelectorAll('img').forEach((node, index) => { node.alt = imageDescriptions[index]; });
  setMenu(menuButton.getAttribute('aria-expanded') === 'true');
  if (activeCase) renderCase(activeCase);
  try { localStorage.setItem('cherdakov-language', language); } catch { /* The site also works with storage disabled. */ }
}

languageButton.addEventListener('click', () => {
  setLanguage(language === 'ru' ? 'en' : 'ru');
  const url = new URL(window.location.href);
  if (language === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
  history.replaceState(null, '', url);
});

menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileMenu.hidden) { setMenu(false); menuButton.focus(); }
});
window.matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
  activeCase = button.dataset.case;
  renderCase(activeCase);
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); activeCase = null; });
document.querySelector('#year').textContent = String(new Date().getFullYear());

const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
let savedLanguage;
try { savedLanguage = localStorage.getItem('cherdakov-language'); } catch { /* Storage is optional. */ }
setLanguage(requestedLanguage === 'en' || requestedLanguage === 'ru' ? requestedLanguage : savedLanguage === 'en' ? 'en' : 'ru');
