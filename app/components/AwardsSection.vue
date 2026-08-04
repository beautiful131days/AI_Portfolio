<script setup>
import { Icon } from '@iconify/vue'

const awards = [
  {
    date: '2026.07.31',
    title: 'SousakuAI Agent Creation Cup 2026 Vol.2',
    prize: '最優秀実写賞',
    url: 'https://x.com/iyamaita/status/2083414314594001209?s=20',
    img: '/images/award_sousakuai_2026.jpg',
    featured: true
  },
  {
    date: '2026.06.03',
    title: 'Lovart実務デザインコンテスト',
    prize: '優秀賞',
    url: 'https://x.com/iyamaita/status/2062110163172303170?s=20',
    img: '/images/award_lovart_2026.jpg'
  },
  {
    date: '2026.05.27',
    title: 'Kling 4K Cinema Week – 次世代映像祭（CPP部門）',
    prize: '優秀映像賞',
    url: 'https://x.com/iyamaita/status/2059625302394053075?s=20',
    img: '/images/award_kling_2026.jpg'
  },
  {
    date: '2026.05.26',
    title: 'PolloAI ワークフローチャレンジ',
    prize: '参加賞',
    url: 'https://x.com/iyamaita/status/2059249594022973907?s=20',
    img: '/images/award_pollo_workflow_2026.jpg'
  },
  {
    date: '2026.05.09',
    title: 'PolloAI ポスターデザインコンテスト',
    prize: '参加賞',
    url: 'https://x.com/iyamaita/status/2053070366235623734?s=20',
    img: '/images/award_pollo_poster_2026.jpg',
    portrait: true
  },
  {
    date: '2026.04.21',
    title: '新入社員AI選手権',
    prize: 'やばい新人賞',
    url: 'https://x.com/iyamaita/status/2046557077624291642?s=20',
    img: '/images/award_shinjin_2026.jpg'
  }
]

const cppPartners = ['Kling', 'OiiOii', 'Pollo', 'Sjinn', 'Renoise', 'Zopia', 'PixVerse', 'Flova']

const featuredAward = awards[0]
const klingAward = awards[2]
const otherAwards = awards.filter((_, index) => index !== 0 && index !== 2)
</script>

<template>
  <section id="awards" class="relative overflow-hidden px-6 pt-24 sm:pt-36">
    <div class="pointer-events-none absolute top-48 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-300/[0.045] blur-[100px]" />

    <div class="max-w-[800px] mx-auto">
      <header class="mb-10 sm:mb-14">
        <div class="flex items-center gap-3 mb-5">
          <span class="h-px w-10 bg-amber-300/60" />
          <p class="text-[11px] tracking-[0.26em] text-amber-200/65">ACHIEVEMENTS / 2026</p>
        </div>
        <div class="flex items-end gap-4 sm:gap-6">
          <h2 class="text-[clamp(40px,8vw,72px)] leading-none font-semibold tracking-[-0.045em]">Awards</h2>
          <p class="mb-1 border-l border-white/20 pl-4 text-sm tracking-[0.16em] text-white/45 sm:mb-2 sm:pl-6 sm:text-base">受賞歴</p>
        </div>
      </header>

      <!-- featured award -->
      <a
        :href="featuredAward.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative block overflow-hidden rounded-[24px] border border-amber-200/25 bg-[#11100c] p-6 sm:p-10 transition duration-500 hover:-translate-y-1 hover:border-white/35"
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(253,230,138,0.13),transparent_42%)]" />

        <div class="relative grid gap-8 sm:grid-cols-[1.15fr_0.85fr] sm:items-stretch">
          <div class="flex flex-col justify-between">
            <div>
            <div class="mb-8 flex items-center gap-3">
              <Icon icon="solar:cup-star-bold" class="text-xl text-amber-200" />
              <span class="text-[10px] tracking-[0.24em] text-amber-200/70">TOP HONOR</span>
            </div>
            <time class="text-xs tracking-[0.14em] text-white/35">{{ featuredAward.date }}</time>
            <h3 class="mt-4 max-w-[570px] text-2xl sm:text-[34px] leading-[1.25] font-medium tracking-[-0.025em]">
              {{ featuredAward.title }}
            </h3>
            <p class="mt-5 text-xl sm:text-2xl font-semibold text-amber-200">「{{ featuredAward.prize }}」</p>
            </div>
            <div class="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span class="text-[10px] tracking-[0.16em] text-white/30">VIEW ON X</span>
              <Icon icon="solar:arrow-up-right-linear" class="text-xl text-white/35" />
            </div>
          </div>

          <div class="relative min-h-[210px] overflow-hidden rounded-[16px] bg-black/30 sm:min-h-0">
            <img :src="featuredAward.img" :alt="`${featuredAward.title} 受賞作品`" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </a>

      <!-- Kling spotlight -->
      <a
        :href="klingAward.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-4 grid overflow-hidden rounded-[20px] border border-sky-200/20 bg-gradient-to-br from-sky-300/[0.075] via-[#0d1115] to-[#08090a] transition duration-500 hover:-translate-y-1 hover:border-sky-100/35 sm:grid-cols-[0.9fr_1.1fr]"
      >
        <div class="relative min-h-[230px] overflow-hidden sm:min-h-[310px]">
          <img :src="klingAward.img" :alt="`${klingAward.title} 受賞作品`" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent sm:bg-gradient-to-r" />
        </div>
        <div class="relative flex flex-col justify-between p-6 sm:p-9">
          <div>
            <div class="mb-7 flex items-center gap-3">
              <Icon icon="solar:clapperboard-play-bold" class="text-lg text-sky-100/75" />
              <span class="text-[10px] tracking-[0.22em] text-sky-100/50">FEATURED FILM AWARD</span>
            </div>
            <time class="text-xs tracking-[0.14em] text-white/35">{{ klingAward.date }}</time>
            <h3 class="mt-4 text-xl sm:text-2xl leading-snug font-medium tracking-[-0.02em]">{{ klingAward.title }}</h3>
            <p class="mt-4 text-lg font-semibold text-sky-100/85">「{{ klingAward.prize }}」</p>
          </div>
          <div class="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <span class="text-[10px] tracking-[0.16em] text-white/30">VIEW ON X</span>
            <Icon icon="solar:arrow-up-right-linear" class="text-xl text-white/35 transition group-hover:text-white" />
          </div>
        </div>
      </a>

      <!-- award index -->
      <div class="mt-4 border-t border-white/10">
        <a
          v-for="award in otherAwards"
          :key="award.url"
          :href="award.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group grid grid-cols-[68px_1fr_auto] sm:grid-cols-[104px_96px_1fr_auto] items-center gap-3 sm:gap-4 border-b border-white/10 py-4 sm:py-5 transition hover:border-white/25"
        >
          <time class="hidden sm:block text-[11px] tracking-[0.1em] text-white/35">{{ award.date }}</time>
          <div class="relative aspect-video overflow-hidden rounded-[8px] bg-white/[0.04]">
            <img
              v-if="award.img"
              :src="award.img"
              :alt="`${award.title} 受賞作品`"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              :class="award.portrait ? 'object-top' : 'object-center'"
            />
            <div v-else class="flex h-full items-center justify-center text-[9px] tracking-[0.18em] text-white/20">LOVART</div>
          </div>
          <div class="min-w-0">
            <time class="sm:hidden text-[10px] tracking-[0.1em] text-white/35">{{ award.date }}</time>
            <h3 class="mt-1 sm:mt-0 text-sm sm:text-[15px] leading-relaxed text-white/80 transition group-hover:text-white">
              {{ award.title }}
            </h3>
            <p class="mt-1 text-xs text-white/40">{{ award.prize }}</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="hidden sm:block h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-8" />
            <Icon icon="solar:arrow-up-right-linear" class="text-lg text-white/25 transition group-hover:text-white" />
          </div>
        </a>
      </div>

      <p class="mt-5 text-[11px] tracking-[0.04em] text-white/25">各受賞歴を選択すると、Xの掲載投稿をご覧いただけます。</p>

      <!-- creative partners -->
      <div class="relative mt-24 sm:mt-32">
        <div class="mb-8 flex items-end justify-between gap-4">
          <div>
            <div class="mb-4 flex items-center gap-3">
              <span class="h-px w-10 bg-white/30" />
              <p class="text-[10px] tracking-[0.24em] text-white/40">COLLABORATION</p>
            </div>
            <h3 class="text-3xl sm:text-5xl font-semibold tracking-[-0.035em]">Creative Partners</h3>
          </div>
        </div>

        <p class="mb-8 max-w-[520px] text-sm leading-[1.8] text-white/45">
          各AIプラットフォームのクリエイティブパートナーとして活動しています。
        </p>

        <ul class="grid grid-cols-2 sm:grid-cols-4 border-l border-t border-white/10" aria-label="クリエイティブパートナー参加プラットフォーム">
          <li
            v-for="partner in cppPartners"
            :key="partner"
            class="group relative flex min-h-[58px] items-center justify-center overflow-hidden border-r border-b border-white/10 bg-white/[0.02] px-3 py-4 transition duration-300 hover:bg-white/[0.07] sm:min-h-[68px]"
          >
            <span class="text-xs sm:text-sm font-medium tracking-[-0.01em] text-white/60 transition group-hover:text-white">
              {{ partner }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
