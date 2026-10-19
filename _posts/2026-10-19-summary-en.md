---
layout: default
title: "Horizon Summary: 2026-10-19 (EN)"
date: 2026-10-19
lang: en
---

> From 8 items, 1 important content pieces were selected

---

**Technology News**
1. [Linux 7.3 Kernel Released](#item-tech-news-1) ⭐️ 8.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Linux 7.3 Kernel Released](https://lwn.net/Articles/1101143/) ⭐️ 8.0/10

Linux 7.3 has been released, according to a LWN article linked from a Hacker News post, but the source text itself was not available for review. Commenters report that the release included 18,765 non-merge commits from 3,021 developers, with 807 first-time kernel developers, and quote a changelog entry describing opt-in Apple Time Machine support in ksmbd, the in-kernel SMB server. Another commenter quotes an ARM device tree entry adding support for the Apple M3 Pro, Max, and Ultra SoCs. These specifics come from quoted commenter text and have not been verified against the release notes or changelog.

hackernews · cjd8 · Oct 19, 07:23 · [Discussion](https://news.ycombinator.com/item?id=50149392)

**「Background」** ksmbd is the SMB file server built into the Linux kernel, and Linux 7.3 adds opt-in support for Apple Time Machine, which lets macOS backups use a ksmbd share as their destination. Linux 7.3 went through release-candidate testing first, with 7.3-rc1 published on 30 August 2026 as a pre-release build rather than a stable kernel.

**「Impact」** Administrators who want to use a Linux machine running ksmbd as a macOS Time Machine target should check the 7.3 release notes to confirm the feature is present and how it is enabled, since the opt-in behavior is described only in a quoted commit excerpt.

**「Community discussion」** One commenter noted that the unusually large patch count may reflect a rise in AI-assisted submissions, while saying that this is an observation rather than a criticism. Another asked whether Rust adoption in the kernel is accelerating, but no commenter offered data on that question.

<details><summary>References</summary>
<ul>
<li><a href="https://www.phoronix.com/news/Linux-7.3-KSMBD">Linux 7 . 3 KSMBD Adds Interoperability For Apple Time Machine ...</a></li>
<li><a href="https://www.linuxpanda.com/linux-7-3-rc1-released-amd-zen-6-btrfs/">Linux 7 . 3 -rc1 Released With AMD Zen 6 and Btrfs Upgrades</a></li>

</ul>
</details>

**Tags**: `#Linux kernel`, `#Open source`, `#ksmbd and SMB`, `#Apple silicon`, `#Kernel development`

---