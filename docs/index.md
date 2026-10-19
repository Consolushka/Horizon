---
layout: default
title: Архив
---

<section class="lede">
  <div class="eyebrow label">Архив</div>
  <h1 class="lede-title">Все выпуски.</h1>
  <p>Ежедневная подборка: политика, Россия, НБА, релизы и open source, гаджеты, Go. Модель оценивает сотни материалов и пересказывает самые важные.</p>
</section>

{% assign ru_posts = site.posts | where: "lang", "ru" %}
<nav class="toc archive" aria-label="Выпуски">
  <ol>
    {% for post in ru_posts limit:60 %}
    <li><span class="num">{{ post.date | date: "%d.%m" }}</span><a href="{{ post.url | relative_url }}">Выпуск за {{ post.date | date: "%d.%m.%Y" }}</a><span class="score">→</span></li>
    {% else %}
    <li><span class="num">—</span><span>Пока пусто</span></li>
    {% endfor %}
  </ol>
</nav>
