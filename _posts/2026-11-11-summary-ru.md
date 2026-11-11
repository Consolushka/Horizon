---
layout: default
title: "Horizon Summary: 2026-11-11 (RU)"
date: 2026-11-11
lang: ru
---

> Из 434 материалов отобрано важных: 10

---

**Политика**
1. [В Абу-Даби возобновились переговоры Украины и России при посредничестве США](#item-politics-1) ⭐️ 8.0/10

**Россия**
1. [Reuters: атаки затронули НПЗ с 30% мощностей России](#item-russia-1) ⭐️ 7.0/10

**Релизы и open source**
1. [Анонс .NET 11](#item-tech-1) ⭐️ 8.0/10
2. [DeepMind представила AlphaProof Code для верификации ПО](#item-tech-2) ⭐️ 7.5/10
3. [Chrome выпустила modern-web-guidance 1.0 для ИИ-агентов](#item-tech-3) ⭐️ 7.5/10

**Гаджеты и софт**
1. [iFixit разобрал MacBook Pro с сенсорным экраном](#item-gadgets-1) ⭐️ 7.0/10
2. [iOS 27.2 вышла с новинками в шести приложениях](#item-gadgets-2) ⭐️ 7.0/10
3. [Pixel Drop в ноябре: Android 17 QPR2 и новые функции ИИ](#item-gadgets-3) ⭐️ 7.0/10
4. [Уязвимость worse\_query в iOS угрожает сид-фразам кошельков](#item-gadgets-4) ⭐️ 7.0/10

**Go**
1. [Вышел Go 1.27.4 с исправлениями безопасности](#item-go-1) ⭐️ 6.0/10

---

## Политика

<a id="item-politics-1"></a>
### [В Абу-Даби возобновились переговоры Украины и России при посредничестве США](https://jam-news.net/ru/%d0%b2%d0%be%d0%b7%d0%be%d0%b1%d0%bd%d0%be%d0%b2%d0%b8%d0%bb%d0%b8%d1%81%d1%8c-%d0%bf%d0%b5%d1%80%d0%b5%d0%b3%d0%be%d0%b2%d0%be%d1%80%d1%8b-%d1%80%d0%be%d1%81%d1%81%d0%b8%d1%8f-%d1%83%d0%ba%d1%80/) ⭐️ 8.0/10

По данным JAM News, в Абу-Даби после девятимесячной паузы возобновились переговоры Украины и России при посредничестве США. Стороны обсуждают условия прекращения войны, вопрос Донецка и гарантии безопасности для Украины; ТАСС сообщает о втором дне переговоров, РБК — что Трамп увидел шанс на прорыв.

rss · JAMnews · Nov 10, 13:37

**Теги**: `#peace negotiations`, `#Russia-Ukraine`, `#Abu Dhabi`, `#US mediation`, `#security guarantees`

---

## Россия

<a id="item-russia-1"></a>
### [Reuters: атаки затронули НПЗ с 30% мощностей России](https://meduza.io/news/2026/11/10/reuters-ukrainskie-udary-vyveli-iz-stroya-30-moschnostey-rossiyskih-npz) ⭐️ 7.0/10

С конца октября Украина возобновила регулярные удары по российским НПЗ. По данным Reuters со ссылкой на два отраслевых источника, они затронули предприятия, на которые приходится около 30% нефтеперерабатывающих мощностей России.

rss · Медуза · Nov 10, 15:57

**Теги**: `#НПЗ`, `#атаки на нефтепереработку`, `#топливный рынок`, `#Reuters`, `#бензин`

---

## Релизы и open source

<a id="item-tech-1"></a>
### [Анонс .NET 11](https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/) ⭐️ 8.0/10

Microsoft выпустила .NET 11 — новую мажорную версию кроссплатформенной среды выполнения и фреймворка. В числе замеченных изменений совместимости — поведение преобразования decimal: для \(decimal\)0.1 в .NET 10 получается 0.1, а в .NET 11 — 0.1000000000000000055511151231.

hackernews · runesoerensen · Nov 10, 16:01 · [Обсуждение](https://news.ycombinator.com/item?id=50442225)

**「Мнение сообщества」** Бывший сотрудник Microsoft на Hacker News пишет, что крупнейшие высоконагруженные сервисы компании в Office, Security и Azure работают на .NET Core под Windows и Linux.

**Теги**: `#dotnet`, `#csharp`, `#microsoft`, `#runtime`, `#major-release`

---

<a id="item-tech-2"></a>
### [DeepMind представила AlphaProof Code для верификации ПО](https://deepmind.google/blog/introducing-alphaproof-code/) ⭐️ 7.5/10

DeepMind представила AlphaProof Code — ИИ-агента, который пишет формальные доказательства на Lean и Rocq для проверки существующих программных библиотек. Из доступных материалов неясно, можно ли попробовать инструмент самостоятельно.

hackernews · ilreb · Nov 10, 12:11 · [Обсуждение](https://news.ycombinator.com/item?id=50439193)

**「Обсуждение」** Комментатор r0ze-at-hn по своему опыту отмечает, что ИИ легко «обманывает» при написании Lean-кода, поэтому сгенерированные доказательства нужно проверять отдельным состязательным запросом, а другой участник сомневается, что в проверенной библиотеке действительно не нашлось ни одной ошибки.

**Теги**: `#formal-verification`, `#AI-agents`, `#Lean`, `#DeepMind`, `#program-proof`

---

<a id="item-tech-3"></a>
### [Chrome выпустила modern-web-guidance 1.0 для ИИ-агентов](https://github.com/GoogleChrome/modern-web-guidance) ⭐️ 7.5/10

Open-source проект modern-web-guidance 1.0 от команды Chrome \(совместно с Firefox, MDN и Edge\) — это более 200 руководств, которые учат кодинг-агентов использовать нативные возможности веба \(\`&lt;dialog&gt;\`, \`CSS.highlights\`, \`field-sizing\`\) вместо устаревшего JS. По данным авторов, на 200 задачах доля пройденных проверок у агентов выросла с 55% до 92%.

hackernews · paulirish · Nov 10, 18:01 · [Обсуждение](https://news.ycombinator.com/item?id=50443812)

**「Обсуждение」** По мнению комментатора surround, многие функции, которые навыки предлагают агенту, стабильны в Chrome, но не поддерживаются в Firefox и Safari.

**Теги**: `#coding-agents`, `#web-platform`, `#chrome`, `#agent-skills`, `#open-source`

---

## Гаджеты и софт

<a id="item-gadgets-1"></a>
### [iFixit разобрал MacBook Pro с сенсорным экраном](https://9to5mac.com/2026/11/10/ifixit-tears-down-touchscreen-macbook-pro-reveals-light-up-apple-logo-details/) ⭐️ 7.0/10

iFixit опубликовал разборку нового MacBook Pro с дисплеем PROLED XDR и показал, как Apple вернула подсветку логотипа на крышке. Видео доступно с 10 ноября 2026 года.

rss · 9to5Mac · Nov 10, 23:14

**Теги**: `#MacBook Pro`, `#iFixit teardown`, `#touchscreen Mac`, `#illuminated Apple logo`, `#Mac hardware`

---

<a id="item-gadgets-2"></a>
### [iOS 27.2 вышла с новинками в шести приложениях](https://9to5mac.com/2026/11/10/ios-27-2-adds-new-features-in-six-iphone-apps-details-here/) ⭐️ 7.0/10

Apple выпустила iOS 27.2 для iPhone: обновление добавляет новые функции в шести приложениях Apple. Обновление уже доступно.

rss · 9to5Mac · Nov 10, 19:50

**Теги**: `#iOS 27.2`, `#iPhone`, `#Apple apps`, `#OS update`

---

<a id="item-gadgets-3"></a>
### [Pixel Drop в ноябре: Android 17 QPR2 и новые функции ИИ](https://9to5google.com/2026/11/10/november-2026-pixel-feature-drop/) ⭐️ 7.0/10

Google выпускает Pixel Drop на месяц раньше обычного, в ноябре 2026 года, вместе с Android 17 QPR2. Обновление добавляет функции Gemini и другие ИИ-возможности, а для Pixel 10 — Create My Widget, HiLight для Google Messages и Pixel 10 Rambler.

rss · 9to5Google · Nov 10, 19:00

**Теги**: `#Pixel Drop`, `#Android 17 QPR2`, `#Pixel 10`, `#Gemini`, `#Google Messages`

---

<a id="item-gadgets-4"></a>
### [Уязвимость worse\_query в iOS угрожает сид-фразам кошельков](http://rozetked.me/news/49381) ⭐️ 7.0/10

Сообщается об уязвимости worse\_query в последних версиях iOS: приложение может читать локальные файлы других программ, включая сид-фразы криптокошельков. Риск касается только приложений из ненадёжных источников \(подписанных вручную или установленных через сайдлоад\); Apple уже получила отчёт, но исправления пока нет.

telegram · rozetked · Nov 10, 12:30

**Теги**: `#iOS vulnerability`, `#iPhone security`, `#worse\_query`, `#crypto wallets`, `#sideloading`

---

## Go

<a id="item-go-1"></a>
### [Вышел Go 1.27.4 с исправлениями безопасности](https://www.reddit.com/r/golang/comments/1xtawnt/go_1274_security_release_cgo_flags_and_a_nethttp/) ⭐️ 6.0/10

Опубликован релиз Go 1.27.4 с исправлениями безопасности: по заголовку, они касаются флагов cgo и проблемы в net/http. Бинарные и исходные дистрибутивы доступны на go.dev/dl, примечания к релизу есть на go.dev/doc/devel/release\#go1.27.4.

reddit · r/golang · /u/Efficient\_File · Nov 11, 06:48

**Теги**: `#go-release`, `#security`, `#cgo`, `#net/http`, `#patch-release`

---