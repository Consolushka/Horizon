---
layout: default
title: "Horizon Summary: 2026-11-08 (RU)"
date: 2026-11-08
lang: ru
---

> Из 306 материалов отобрано важных: 1

---

**Go**
1. [gobwas/ws v1.5.0: исправления безопасности и ускорение маскирования](#item-go-1) ⭐️ 6.0/10

---

## Go

<a id="item-go-1"></a>
### [gobwas/ws v1.5.0: исправления безопасности и ускорение маскирования](https://www.reddit.com/r/golang/comments/1xq6zuj/gobwasws_v150_go_127_flate_fix_oom_vuln_fix_4x/) ⭐️ 6.0/10

В gobwas/ws v1.5.0 исправлен сбой расширения permessage-deflate из-за изменений в compress/flate в Go 1.27 \(\#221\). Также закрыта уязвимость, при которой ридеры выделяли память под любую длину payload, заявленную пиром \(\#223\), что могло приводить к OOM. Маскирование payload переписано на NEON и SSE2/AVX2: по заявлению автора, до 4x на самом XOR и до 2,6x на полном пути клиентской записи \(\#235\).

reddit · r/golang · /u/gobwas · Nov 7, 13:58

**Теги**: `#websocket`, `#gobwas-ws`, `#security-fix`, `#performance`, `#compress-flate`

---