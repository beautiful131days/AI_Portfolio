<script setup>
import { ref } from 'vue'

const works = [
  {
    title: '',
    desc: 'WAIFF 2026 ベストAI CM部門 応募作品',
    img: '/images/work005_waiff_2026.webp',
    videoId: 'WZDQv01IQBU',
    ratio: 'landscape',
    featured: true
  },
    {
    title: '',
    desc: '短編 MV',
    img: '/images/work008_mv_01.webp',
    videoId: 'QBMeyExj7gg',
    ratio: 'portrait',
    featured: false
  },
  {
    title: '',
    desc: 'RoboNeo PR投稿',
    img: '/images/work007_roboneo_01.webp',
    videoId: 'uJRRXwJN6gY',
    ratio: 'portrait',
    featured: false
  },
  {
    title: '',
    desc: 'RoboNeo PR投稿',
    img: '/images/work007_roboneo_02.webp',
    videoId: 'zNhHrLREHEg',
    ratio: 'portrait',
    featured: false
  },
  {
    title: '',
    desc: 'AI猫の日にゃんにゃんにゃん選手権 応募作品',
    img: '/images/work006_neko_2026.webp',
    videoId: '33jXXwiQC7A',
    ratio: 'portrait',
    featured: false
  },
  {
    title: '',
    desc: 'Yes Viduチャレンジ 応募作品',
    img: '/images/work004_yes_vidu.webp',
    videoId: 'OpO9nNF0ZIk',
    ratio: 'portrait',
    featured: false
  },
  {
    title: '',
    desc: 'RUN FORWARD : AI VIDEO CONTEST 2026 応募作品',
    img: '/images/work003_ai_video_2026.webp',
    videoId: 'JSd_XRd5OTs',
    ratio: 'portrait',
    featured: false
  },
  {
    title: '',
    desc: 'クリスマス短編動画コンテスト 2025 応募作品',
    img: '/images/work002_2025_christmas.webp',
    videoId: '4dcm2rGwr6o',
    ratio: 'portrait',
    featured: false
  },
  {
    title: '',
    desc: 'Sousaku AI クリスマス創作カップ2025 応募作品',
    img: '/images/work001_sousakuai_2025winter.webp',
    videoId: 'VyArN9prGWg',
    ratio: 'landscape',
    featured: true
  }
]

const selectedVideo = ref(null)

const openVideo = (id) => {
  selectedVideo.value = id
}

const closeVideo = () => {
  selectedVideo.value = null
}
</script>

<template>
  <section id="works" class="px-6 pt-24 sm:pb-24 pb-12">

    <div class="max-w-[800px] mx-auto">

      <h2 class="text-3xl sm:text-4xl mb-8 font-semibold">
        Works
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <article
          v-for="w in works"
          :key="w.title"
          @click="openVideo(w.videoId)"
          class="group cursor-pointer bg-[#111] border border-white/15 rounded-[20px] overflow-hidden transition hover:-translate-y-1 hover:border-white/30"
          :class="w.featured ? 'sm:col-span-2' : ''"
        >

          <!-- image -->
          <div
            class="overflow-hidden bg-[#1a1a1a]"
            :class="w.ratio === 'landscape' ? 'aspect-[16/9]' : 'aspect-[4/5]'"
          >
            <img
              :src="w.img"
              :alt="w.title"
              loading="lazy"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <!-- body -->
          <div class="p-5">
            <h3 class="text-xl sm:text-2xl mb-2 font-semibold">
              {{ w.title }}
            </h3>

            <p class="text-sm sm:text-[15px] text-white/70 leading-relaxed">
              {{ w.desc }}
            </p>
          </div>

        </article>

      </div>

    </div>

    <!-- modal -->
    <div
      v-if="selectedVideo"
      @click.self="closeVideo"
      class="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50"
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
        class="absolute top-5 right-6 text-white text-3xl"
      >
        ✕
      </button>

    </div>

  </section>
</template>
