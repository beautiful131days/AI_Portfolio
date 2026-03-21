<script setup>
import { Icon } from '@iconify/vue'

const stats = [
  { label: 'Instagram', value: '7.6万+' },
  { label: 'TikTok', value: '1.5万+' },
  { label: 'YouTube', value: '0.8万+' },
  { label: 'Max Views', value: '4400万+' }
]
</script>

<template>
  <section class="px-6 pt-16">
    <div class="max-w-[800px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 items-center">

      <!-- テキスト -->
      <div class="flex flex-col gap-5">

        <p class="text-[13px] tracking-[0.2em] text-white/60">
          AI CREATOR PORTFOLIO
        </p>
        <h1 class="text-[clamp(32px,7vw,64px)] leading-[0.95] font-bold tracking-[-0.03em] flex items-center gap-4 sm:gap-12 mb-4">
          やす
          <a href="https://x.com/iyamaita" target="_blank"
            class="flex items-center gap-2 text-2xl sm:text-4xl text-neutral-400 hover:text-white transition">
            <Icon icon="ri:twitter-x-fill" />
            <span>@iyamaita</span>
          </a>
        </h1>

        <p class="text-[15px] sm:text-[16px] leading-[1.85] sm:leading-[1.95] text-white/70 max-w-[640px]">
          AI広告映像、短編映像を中心に、
          世界観と印象に残るビジュアル体験を重視した作品を制作しています。
          SNS発信と映像制作の両軸で、AIクリエイティブの可能性を広げています。
        </p>

        <!-- stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div v-for="stat in stats" :key="stat.label"
            class="p-4 sm:p-4 rounded-[18px] border border-white/10 bg-white/5 backdrop-blur">
            <p class="text-[14px] sm:text-[14px] leading-none mb-1">
              {{ stat.value }}
            </p>
            <p class="text-[12px] text-white/60">
              {{ stat.label }}
            </p>
          </div>
        </div>

        <p class="text-xs text-neutral-500 -mt-4">
          ※過去運用・非公開アカウント含む実績
        </p>

        <!-- buttons -->
        <div class="flex flex-wrap gap-3 mt-2">
          <a href="#works"
            class="flex items-center justify-center min-w-[170px] px-6 py-3 rounded-full bg-white text-black font-semibold hover:-translate-y-1 transition">
            作品を見る
          </a>
          <a href="#contact"
            class="flex items-center justify-center min-w-[170px] px-6 py-3 rounded-full border border-white/20 text-white hover:-translate-y-1 transition">
            Contact
          </a>
        </div>
      </div>

      <!-- 画像 -->
      <div class="flex justify-center">
        <div class="relative w-[80%] max-w-[520px] rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.45)] mx-auto mb-12 sm:mb-0">
          <img
            src="/images/profile.webp"
            alt="Yasu"
            class="w-full h-auto object-cover aspect-[1/1]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
