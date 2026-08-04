<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="relative z-40 px-4 pt-4 sm:px-6 sm:pt-6">
    <nav class="ml-auto flex w-fit items-center" aria-label="メインナビゲーション">
      <div class="flex items-center gap-1.5">
        <div class="flex items-center rounded-full border border-white/8 bg-white/[0.035] p-0.5 text-[10px] tracking-[0.02em] text-white/50 sm:text-[11px]">
          <a href="#awards" class="rounded-full px-2.5 py-2 transition duration-300 hover:bg-white/8 hover:text-white sm:px-3.5">Awards</a>
          <a href="#works" class="rounded-full px-2.5 py-2 transition duration-300 hover:bg-white/8 hover:text-white sm:px-3.5">Works</a>
          <a href="#contact" class="rounded-full px-2.5 py-2 transition duration-300 hover:bg-white/8 hover:text-white sm:px-3.5">Contact</a>
        </div>
        <a href="https://x.com/iyamaita" target="_blank" rel="noopener noreferrer" aria-label="Xのプロフィールを開く" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 hover:scale-105 hover:bg-[#d6ff3f] sm:h-9 sm:w-9">
          <Icon icon="ri:twitter-x-fill" />
        </a>
      </div>
    </nav>
  </header>
</template>
