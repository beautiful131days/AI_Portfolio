<script setup>
import { computed, ref } from 'vue'

const works = [
  {
    title: '',
    desc: '時間を止めることができる男に起きた悲惨な結末｜OiiOii Skill「世奇小話」',
    img: '/images/work017_oiioii_skill.jpg',
    videoId: 'HaU3PFyswZs',
    createdAt: '2026-08-03T15:00:54',
    ratio: 'landscape',
    featured: false,
    layout: 'sm:col-span-12 sm:row-span-7'
  },
  {
    title: '',
    desc: '令和の新入社員 AIコンテスト応募作品',
    img: '/images/work009_reiwa_shinjin.webp',
    videoId: '2iIUC3WIIj8',
    createdAt: '2026-08-03T12:33:28',
    ratio: 'landscape',
    featured: true,
    layout: 'sm:col-span-12 sm:row-span-7'
  },
    {
    title: '',
    desc: 'くりえみ AIショートフィルムコンテスト応募作品',
    img: '/images/work010_kuriemi.webp',
    videoId: 'CNmATFEIjDM',
    createdAt: '2026-08-03T12:33:35',
    ratio: 'landscape',
    featured: true,
    layout: 'sm:col-span-12 sm:row-span-7'
  },
  {
    title: '',
    desc: 'WAIFF 2026 ベストAI CM部門 応募作品',
    img: '/images/work005_waiff_2026.webp',
    videoId: 'WZDQv01IQBU',
    createdAt: '2026-08-03T12:33:21',
    ratio: 'landscape',
    featured: true,
    layout: 'sm:col-span-12 sm:row-span-7'
  },
  {
    title: '',
    desc: '赤はまだ醒めない｜SousakuAI Agent Creation Cup 最優秀実写賞',
    img: '/images/award_sousakuai_2026.jpg',
    videoId: 'mN8Xjzvns7U',
    createdAt: '2026-08-03T14:46:37',
    ratio: 'landscape',
    featured: true,
    layout: 'sm:col-span-12 sm:row-span-7'
  },
  {
    title: '',
    desc: 'SousakuAI Agent Anime Cup 2026 応募作品',
    img: '/images/work014_sousaku_anime.jpg',
    videoId: 'E2Dvmo4TtQI',
    createdAt: '2026-08-03T14:35:20',
    ratio: 'landscape',
    featured: false,
    layout: 'sm:col-span-7 sm:row-span-6'
  },
  {
    title: '',
    desc: 'AI FUSION FEST 動画コンテスト 応募作品',
    img: '/images/work015_ai_fusion.jpg',
    videoId: 'Q1WmxdDMSNE',
    createdAt: '2026-08-03T14:42:33',
    ratio: 'landscape',
    featured: false,
    layout: 'sm:col-span-5 sm:row-span-6'
  },
  {
    title: '',
    desc: '森界 -SHINKAI-｜Kling 4K Cinema Week 優秀映像賞',
    img: '/images/work013_kling_shinkai.jpg',
    videoId: 'lHI4FWGLx28',
    createdAt: '2026-08-03T12:33:04',
    ratio: 'landscape',
    featured: true,
    layout: 'sm:col-span-12 sm:row-span-7'
  },
  {
    title: '',
    desc: 'Lovart実務デザインコンテスト 優秀賞｜ハンバーグCM',
    img: '/images/work012_lovart_cm.jpg',
    videoId: 'KEsVpWZwE-w',
    createdAt: '2026-08-03T14:22:11',
    ratio: 'landscape',
    featured: true,
    layout: 'sm:col-span-7 sm:row-span-6'
  },
  {
    title: '',
    desc: 'PolloAI ワークフローチャレンジ 参加賞',
    img: '/images/work011_pollo_workflow.jpg',
    videoId: 'jUIP6hBHsns',
    createdAt: '2026-08-03T14:32:13',
    ratio: 'landscape',
    featured: false,
    layout: 'sm:col-span-5 sm:row-span-6'
  },
  {
    title: '',
    desc: 'AI猫の日にゃんにゃんにゃん選手権 応募作品',
    img: '/images/work006_neko_2026.webp',
    videoId: '33jXXwiQC7A',
    createdAt: '2026-03-20T14:43:00',
    ratio: 'portrait',
    featured: false,
    layout: 'sm:col-span-4 sm:row-span-7'
  },
  {
    title: '',
    desc: 'Yes Viduチャレンジ 応募作品',
    img: '/images/work004_yes_vidu.webp',
    videoId: 'OpO9nNF0ZIk',
    createdAt: '2026-03-20T14:33:18',
    ratio: 'portrait',
    featured: false,
    layout: 'sm:col-span-4 sm:row-span-7'
  },
  {
    title: '',
    desc: 'RUN FORWARD : AI VIDEO CONTEST 2026 応募作品',
    img: '/images/work003_ai_video_2026.webp',
    videoId: 'JSd_XRd5OTs',
    createdAt: '2026-03-20T14:41:46',
    ratio: 'portrait',
    featured: false,
    layout: 'sm:col-span-4 sm:row-span-7'
  },
  {
    title: '',
    desc: 'クリスマス短編動画コンテスト 2025 応募作品',
    img: '/images/work002_2025_christmas.webp',
    videoId: '4dcm2rGwr6o',
    createdAt: '2026-03-20T14:35:31',
    ratio: 'portrait',
    featured: false,
    layout: 'sm:col-span-5 sm:row-span-6'
  },
  {
    title: '',
    desc: 'Sousaku AI クリスマス創作カップ2025 応募作品',
    img: '/images/work001_sousakuai_2025winter.webp',
    videoId: 'VyArN9prGWg',
    createdAt: '2026-03-20T14:34:36',
    ratio: 'landscape',
    featured: true,
    layout: 'sm:col-span-7 sm:row-span-6'
  }
]

const featuredOrder = ['mN8Xjzvns7U', 'lHI4FWGLx28', 'WZDQv01IQBU']

const sortedWorks = computed(() =>
  [...works].sort((a, b) => {
    const aFeatured = featuredOrder.indexOf(a.videoId)
    const bFeatured = featuredOrder.indexOf(b.videoId)

    if (aFeatured !== -1 || bFeatured !== -1) {
      if (aFeatured === -1) return 1
      if (bFeatured === -1) return -1
      return aFeatured - bFeatured
    }

    return new Date(b.createdAt) - new Date(a.createdAt)
  })
)

const selectedVideo = ref(null)

const openVideo = (id) => {
  selectedVideo.value = id
}

const closeVideo = () => {
  selectedVideo.value = null
}
</script>

<template>
  <section id="works" class="px-6 pt-28 sm:pt-36 sm:pb-28 pb-16">

    <div class="max-w-[800px] mx-auto">

      <div class="mb-10 sm:mb-14 flex items-end justify-between gap-6">
        <div>
          <p class="mb-4 flex items-center gap-3 text-[10px] tracking-[0.24em] text-white/40"><span class="h-px w-10 bg-white/30" />SELECTED WORK</p>
          <h2 class="text-[clamp(40px,8vw,72px)] leading-none font-semibold tracking-[-0.045em]">Works</h2>
        </div>
        <p class="pb-1 text-xs tracking-[0.14em] text-white/25">2025—2026</p>
      </div>

      <div class="grid grid-cols-2 gap-3 sm:grid-cols-12 sm:auto-rows-[58px] sm:gap-4">

        <article
          v-for="w in sortedWorks"
          :key="w.videoId"
          @click="openVideo(w.videoId)"
          class="group relative cursor-pointer overflow-hidden rounded-[12px] border border-white/10 bg-[#0b0b0b] transition duration-500 hover:-translate-y-1 hover:border-white/30"
          :class="[
            w.ratio === 'landscape' ? 'col-span-2 aspect-video' : 'col-span-1 aspect-[3/4]',
            w.layout,
            'sm:aspect-auto'
          ]"
        >
          <img :src="w.img" :alt="w.desc" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent transition duration-500 group-hover:from-black/75" />

          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-5">
            <div class="min-w-0">
              <span class="mb-1.5 block text-[7px] tracking-[0.18em] text-white/35 sm:text-[9px]">
                {{ w.ratio === 'landscape' ? 'AI FILM' : 'AI SHORT' }}
              </span>
              <p class="text-[10px] leading-snug text-white/75 sm:text-[13px] sm:leading-relaxed">{{ w.desc }}</p>
            </div>
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 pl-px text-[7px] backdrop-blur-md transition group-hover:bg-white group-hover:text-black sm:h-9 sm:w-9 sm:text-[9px]">▶</span>
          </div>

        </article>

      </div>

    </div>

    <!-- modal -->
    <div
      v-if="selectedVideo"
      @click.self="closeVideo"
      class="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 z-50"
    >

      <div class="w-full max-w-[1100px] aspect-video">
        <iframe
          class="w-full h-full rounded-xl"
          :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <button
        @click="closeVideo"
        aria-label="動画を閉じる"
        class="absolute top-5 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white text-lg transition hover:bg-white hover:text-black"
      >
        ✕
      </button>

    </div>

  </section>
</template>
