<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="contact" class="px-6 pb-10 pt-16 sm:pt-24">
    <div class="relative mx-auto max-w-[800px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] px-6 py-16 text-center sm:px-12 sm:py-24">
      <div class="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.06] blur-[80px]" />

    <!-- タイトル -->
    <p class="relative mb-5 text-[10px] tracking-[0.25em] text-white/40">LET'S CREATE SOMETHING</p>
    <h2 class="relative text-[clamp(40px,8vw,68px)] font-semibold leading-[1.05] mb-7 tracking-[-0.05em]">
      Have a project<br>in mind?
    </h2>

    <!-- キャッチ -->
    <p class="relative text-sm text-white/45 mb-9 leading-relaxed">
      AI映像制作・広告クリエイティブのご相談は、<br class="hidden sm:block">XのDMからお気軽にお問い合わせください。
    </p>

    <!-- CTA -->
    <a
      href="https://x.com/iyamaita"
      target="_blank"
      class="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-sm text-black font-semibold hover:-translate-y-1 transition mb-12"
    >
      <Icon icon="ri:twitter-x-fill" class="text-xl" />
      DMで問い合わせる
    </a>

    <!-- SNS（ミニマル） -->
    <div class="relative flex justify-center gap-5 text-white/35">

      <a href="https://x.com/iyamaita" target="_blank"
        class="hover:text-white transition">
        <Icon icon="ri:twitter-x-fill" class="text-xl" />
      </a>

      <a href="https://www.instagram.com/iyamaita_arts/" target="_blank"
        class="hover:text-white transition">
        <Icon icon="mdi:instagram" class="text-xl" />
      </a>

    </div>

    </div>
    <footer class="mx-auto flex max-w-[800px] items-center justify-between px-1 py-8 text-[10px] tracking-[0.12em] text-white/25">
      <span>© 2026 YASU</span>
      <a href="#" class="transition hover:text-white">BACK TO TOP ↑</a>
    </footer>
  </section>
</template>
