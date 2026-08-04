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
  <section class="relative overflow-hidden px-6 pb-10 pt-20 sm:pt-28">
    <div class="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

    <div class="relative mx-auto grid max-w-[900px] gap-x-12 gap-y-10 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[auto_auto] lg:items-center lg:gap-y-9">
      <!-- 名前 -->
      <div class="lg:col-start-1 lg:row-start-1 lg:self-end">
        <p class="mb-7 flex items-center gap-3 text-[11px] tracking-[0.24em] text-white/45">
          <span class="h-px w-8 bg-white/35" />
          AI FILMMAKER / CREATOR
        </p>
        <h1 class="text-[clamp(58px,10vw,100px)] leading-[0.82] font-semibold tracking-[-0.065em]">
          YASU
        </h1>
      </div>

      <!-- プロフィール画像：スマホでは名前と紹介文の間に表示 -->
      <div class="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:ml-auto lg:max-w-[390px]">
        <div class="absolute -inset-3 rounded-full border border-white/[0.06]" />
        <div class="group relative aspect-square overflow-hidden rounded-full bg-[#111]">
          <img
            src="/images/profile.webp"
            alt="Yasu"
            class="h-full w-full object-contain grayscale-[0.2] transition duration-700 group-hover:scale-[1.015] group-hover:grayscale-0"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div class="absolute inset-x-5 bottom-5 flex items-end justify-between">
            <div>
              <p class="text-[10px] tracking-[0.18em] text-white/45">MIYAGI / JAPAN</p>
              <a href="https://x.com/iyamaita" target="_blank" rel="noopener noreferrer" class="mt-1 flex items-center gap-2 text-sm font-medium">
                <Icon icon="ri:twitter-x-fill" /> @iyamaita
              </a>
            </div>
            <span class="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
          </div>
        </div>
      </div>

      <!-- 紹介文・実績 -->
      <div class="lg:col-start-1 lg:row-start-2 lg:self-start">
        <p class="max-w-[530px] text-[15px] leading-[1.9] text-white/58 sm:text-[16px]">
          AI広告映像、短編映像を中心に、
          世界観と印象に残るビジュアル体験を重視した作品を制作しています。
          SNS発信と映像制作の両軸で、AIクリエイティブの可能性を広げています。
        </p>

        <div class="mt-9 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-[14px] border border-white/10 bg-white/[0.025] px-3 py-4 sm:px-4 sm:py-5"
          >
            <p class="mb-2 text-[13px] font-medium leading-none sm:text-base">
              {{ stat.value }}
            </p>
            <p class="text-[9px] tracking-[0.08em] text-white/32 sm:text-[10px]">
              {{ stat.label }}
            </p>
          </div>
        </div>

        <p class="mt-3 text-[10px] text-white/25">
          ※過去運用・非公開アカウント含む実績
        </p>
      </div>
    </div>
  </section>
</template>
