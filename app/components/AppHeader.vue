<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="relative z-40 px-5 pt-5 sm:px-6 sm:pt-6">
    <nav class="mx-auto flex max-w-[900px] items-center justify-between rounded-full border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-xl sm:px-5" aria-label="メインナビゲーション">
      <a href="#" class="flex items-center gap-2 text-sm font-semibold tracking-[-0.02em]">
        <span class="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">Y</span>
        <span>YASU</span>
      </a>

      <div class="flex items-center gap-1 text-[11px] text-white/50 sm:gap-2">
        <a href="#awards" class="rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-white">Awards</a>
        <a href="#works" class="rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-white">Works</a>
        <a href="#contact" class="hidden rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-white sm:block">Contact</a>
        <a href="https://x.com/iyamaita" target="_blank" rel="noopener noreferrer" aria-label="Xのプロフィールを開く" class="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
          <Icon icon="ri:twitter-x-fill" />
        </a>
      </div>
    </nav>
  </header>
</template>
