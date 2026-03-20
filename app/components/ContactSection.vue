<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="contact" class="max-w-3xl mx-auto px-6 sm:pt-24 pt-12 pb-24 text-center border-t border-white/10">

    <!-- タイトル -->
    <h2 class="text-3xl font-bold mb-6 tracking-tight">
      Contact
    </h2>

    <!-- キャッチ -->
    <p class="text-neutral-400 mb-12 leading-relaxed">
      ご相談はXのDMからお気軽に。
    </p>

    <!-- CTA -->
    <a
      href="https://x.com/iyamaita"
      target="_blank"
      class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition mb-12"
    >
      <Icon icon="ri:twitter-x-fill" class="text-xl" />
      DMで問い合わせる
    </a>

    <!-- SNS（ミニマル） -->
    <div class="flex justify-center gap-6 text-neutral-500">

      <a href="https://x.com/iyamaita" target="_blank"
        class="hover:text-white transition">
        <Icon icon="ri:twitter-x-fill" class="text-xl" />
      </a>

      <a href="https://www.instagram.com/iyamaita_arts/" target="_blank"
        class="hover:text-white transition">
        <Icon icon="mdi:instagram" class="text-xl" />
      </a>

    </div>

  </section>
</template>