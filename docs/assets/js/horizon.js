(function () {
  'use strict';

  // Сводка приходит обычным Markdown от генератора. Здесь он раскладывается
  // по блокам макета: оглавление, части, карточки новостей. Если структура
  // не узнана (например, пустой день), страница остаётся как есть.

  var SCORE_RE = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
  var SOURCE_RE = /^(rss|reddit|github|hackernews|hn|telegram)\s*·/i;
  var MONTHS = { Jan: 'янв', Feb: 'фев', Mar: 'мар', Apr: 'апр', May: 'мая', Jun: 'июн',
    Jul: 'июл', Aug: 'авг', Sep: 'сен', Oct: 'окт', Nov: 'ноя', Dec: 'дек' };
  var ORDINALS = ['первая', 'вторая', 'третья', 'четвёртая', 'пятая', 'шестая'];

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function scoreBadge(value) {
    var badge = el('span', 'score', value);
    if (parseFloat(value) >= 8) badge.classList.add('hot');
    return badge;
  }

  // Отрезает «⭐️ 7.0/10» из текста узла и возвращает оценку.
  function takeScore(node) {
    var score = null;
    node.childNodes.forEach(function (child) {
      if (child.nodeType !== Node.TEXT_NODE) return;
      var m = child.textContent.match(SCORE_RE);
      if (!m) return;
      score = m[1];
      child.textContent = child.textContent.replace(SCORE_RE, '').trim();
    });
    return score;
  }

  function materialsPhrase(n) {
    var mod10 = n % 10, mod100 = n % 100;
    var word = mod10 === 1 && mod100 !== 11 ? 'материал'
      : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 'материала' : 'материалов';
    var verb = mod10 === 1 && mod100 !== 11 ? 'который стоит' : 'которые стоит';
    return n + ' ' + word + ', ' + verb + ' прочитать.';
  }

  function buildLede(root) {
    var quote = root.querySelector(':scope > blockquote');
    var title = document.querySelector('[data-digest-title]');
    if (!quote || !title) return;
    var numbers = quote.textContent.match(/\d+/g);
    if (numbers && numbers.length >= 2) title.textContent = materialsPhrase(parseInt(numbers[1], 10));
    title.after(el('p', 'lede-sub', quote.textContent.trim()));
    quote.remove();
  }

  // Оглавление: пары «**Группа**» + список между первыми двумя линейками.
  function buildToc(root) {
    var nav = el('nav', 'toc');
    nav.setAttribute('aria-label', 'Оглавление');
    nav.appendChild(el('div', 'eyebrow label', 'Содержание'));
    var list = el('ol');
    nav.appendChild(list);

    var counter = 0;
    var node = root.querySelector(':scope > hr');
    if (!node) return;
    var first = node;
    node = node.nextElementSibling;
    while (node && node.tagName !== 'HR' && node.tagName !== 'H2') {
      var next = node.nextElementSibling;
      if (node.tagName === 'P' && node.querySelector('strong')) {
        list.appendChild(el('li', 'section-name label', node.textContent.trim()));
      } else if (node.tagName === 'OL') {
        node.querySelectorAll('li').forEach(function (li) {
          var link = li.querySelector('a');
          if (!link) return;
          var score = takeScore(li);
          counter += 1;
          var row = el('li');
          row.appendChild(el('span', 'num', String(counter).padStart(2, '0')));
          row.appendChild(link);
          if (score) row.appendChild(scoreBadge(score));
          list.appendChild(row);
        });
      }
      node.remove();
      node = next;
    }
    if (node && node.tagName === 'HR') node.remove();
    first.replaceWith(nav);
  }

  function localizeDate(text) {
    return text.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d{1,2}:\d{2})/,
      function (_, mon, day, time) { return day + ' ' + MONTHS[mon] + ', ' + time; });
  }

  function decorateParagraph(p) {
    var text = p.textContent.trim();
    var strong = p.firstElementChild;
    var startsWithStrong = strong && strong.tagName === 'STRONG' && text.indexOf(strong.textContent.trim()) === 0;

    if (SOURCE_RE.test(text)) {
      p.className = 'meta label';
      p.childNodes.forEach(function (child) {
        if (child.nodeType === Node.TEXT_NODE) child.textContent = localizeDate(child.textContent);
      });
      p.querySelectorAll('a').forEach(function (a) { a.textContent = a.textContent.trim() + ' ↗'; });
      return p;
    }
    if (startsWithStrong && /^(Теги|Tags|标签)$/.test(strong.textContent.trim())) {
      var tags = el('ul', 'tags');
      p.querySelectorAll('code').forEach(function (code) { tags.appendChild(el('li', null, code.textContent)); });
      return tags;
    }
    var aside = startsWithStrong && strong.textContent.trim().match(/^「(.+)」$/);
    if (aside) {
      strong.remove();
      var box = el('div', 'aside');
      box.appendChild(el('span', 'label', aside[1]));
      while (p.firstChild) box.appendChild(p.firstChild);
      if (box.childNodes[1] && box.childNodes[1].nodeType === Node.TEXT_NODE) {
        box.childNodes[1].textContent = box.childNodes[1].textContent.replace(/^\s+/, '');
      }
      return box;
    }
    return p;
  }

  function buildItem(nodes, anchorId) {
    var article = el('article', 'item');
    if (anchorId) article.id = anchorId;
    var head = null, meta = null;
    nodes.forEach(function (node) {
      if (node.tagName === 'H3') {
        node.removeAttribute('id');
        var score = takeScore(node);
        head = el('div', 'item-head');
        head.appendChild(node);
        if (score) head.appendChild(scoreBadge(score));
        article.appendChild(head);
      } else if (node.tagName === 'P') {
        var decorated = decorateParagraph(node);
        if (decorated.classList.contains('meta')) meta = decorated;
        article.appendChild(decorated);
      } else if (node.tagName !== 'HR') {
        article.appendChild(node);
      }
    });
    // Генератор ставит строку источника после текста, а читать удобнее сразу под заголовком.
    if (head && meta) head.after(meta);
    return article;
  }

  function isAnchorParagraph(node) {
    return node.tagName === 'P' && node.children.length === 1 &&
      node.firstElementChild.tagName === 'A' && node.firstElementChild.id &&
      node.textContent.trim() === '';
  }

  function buildParts(root) {
    var headings = Array.prototype.slice.call(root.querySelectorAll(':scope > h2'));
    headings.forEach(function (h2, index) {
      var section = el('section', 'part');
      var ordinal = ORDINALS[index] || String(index + 1);
      section.appendChild(el('div', 'eyebrow label', 'Часть ' + ordinal + ' · ' + h2.textContent.trim()));
      var grid = el('div', 'grid');
      section.appendChild(grid);

      var current = null, anchorId = null;
      var node = h2.nextElementSibling;
      while (node && node.tagName !== 'H2') {
        var next = node.nextElementSibling;
        if (isAnchorParagraph(node)) {
          if (current) grid.appendChild(buildItem(current, anchorId));
          current = [];
          anchorId = node.firstElementChild.id;
          node.remove();
        } else {
          if (!current) { current = []; anchorId = null; }
          current.push(node);
        }
        node = next;
      }
      if (current) grid.appendChild(buildItem(current, anchorId));
      h2.replaceWith(section);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.querySelector('.content.digest');
    if (!root || !root.querySelector(':scope > h2')) return;
    buildLede(root);
    buildToc(root);
    buildParts(root);
  });
})();
