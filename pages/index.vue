<script lang="ts" setup>
import one from '@/assets/images/portfolio/1.jpg'
import oneAfter from '@/assets/images/portfolio/1-1.jpg'

import two from '@/assets/images/portfolio/2.jpg'
import twoAfter from '@/assets/images/portfolio/2-2.jpg'

import three from '@/assets/images/portfolio/3.jpg'
import threeAfter from '@/assets/images/portfolio/3-3.jpg'

import four from '@/assets/images/portfolio/4.png'
import fourAfter from '@/assets/images/portfolio/4-4.jpg'

import five from '@/assets/images/portfolio/5.png'
import fiveAfter from '@/assets/images/portfolio/5-5.jpeg'

import six from '@/assets/images/portfolio/6.jpg'
import sixAfter from '@/assets/images/portfolio/6-6.png'

import seven from '@/assets/images/portfolio/7.jpeg'
import sevenAfter from '@/assets/images/portfolio/7-7.png'

import eight from '@/assets/images/portfolio/8.png'
import eightAfter from '@/assets/images/portfolio/8-8.jpeg'

import nine from '@/assets/images/portfolio/9.jpg'
import nineAfter from '@/assets/images/portfolio/9-9.jpg'

import img11 from '@/assets/images/portfolio/11.jpeg'
import img12 from '@/assets/images/portfolio/12.jpeg'
import img13 from '@/assets/images/portfolio/13.png'
import img14 from '@/assets/images/portfolio/14.png'
import img15 from '@/assets/images/portfolio/15.png'
import img16 from '@/assets/images/portfolio/16.png'
import img17 from '@/assets/images/portfolio/17.png'
import img18 from '@/assets/images/portfolio/18.png'
import img19 from '@/assets/images/portfolio/19.png'
import img20 from '@/assets/images/portfolio/20.jpg'
import img21 from '@/assets/images/portfolio/21.jpg'
import img22 from '@/assets/images/portfolio/22.png'
import img23 from '@/assets/images/portfolio/23.png'
import img24 from '@/assets/images/portfolio/24.png'
import img25 from '@/assets/images/portfolio/25.png'
import img26 from '@/assets/images/portfolio/26.jpeg'
import img27 from '@/assets/images/portfolio/27.jpg'
import img28 from '@/assets/images/portfolio/28.jpg'

const portfolio = [
  {
    id: 0,
    link: one,
  },
  {
    id: 1,
    link: oneAfter,
  },

  {
    id: 2,
    link: two,
  },

  {
    id: 3,
    link: twoAfter,
  },

  {
    id: 4,
    link: three,
  },

  {
    id: 5,
    link: threeAfter,
  },

  {
    id: 6,
    link: four,
  },

  {
    id: 7,
    link: fourAfter,
  },

  {
    id: 8,
    link: five,
  },

  {
    id: 9,
    link: fiveAfter,
  },

  {
    id: 10,
    link: six,
  },

  {
    id: 11,
    link: sixAfter,
  },
  {
    id: 12,
    link: seven,
  },

  {
    id: 13,
    link: sevenAfter,
  },
  {
    id: 14,
    link: eight,
  },

  {
    id: 15,
    link: eightAfter,
  },
  {
    id: 16,
    link: nine,
  },

  {
    id: 17,
    link: nineAfter,
  },
]

const slides = [
  {
    id: 0,
    link: 'https://masterdver.by/images/upholstery/470.jpg',
  },
  {
    id: 1,
    link: 'https://masterdver.by/images/upholstery/320.jpg',
  },
  {
    id: 2,
    link: 'https://masterdver.by/images/upholstery/330.jpg',
  },
  {
    id: 3,
    link: 'https://masterdver.by/images/upholstery/350.jpg',
  },
  {
    id: 4,
    link: 'https://masterdver.by/images/upholstery/390.jpg',
  },
  {
    id: 5,
    link: 'https://masterdver.by/images/upholstery/399.jpg',
  },
  {
    id: 6,
    link: 'https://masterdver.by/images/upholstery/470.jpg',
  },
  {
    id: 7,
    link: 'https://masterdver.by/images/upholstery/320.jpg',
  },
  {
    id: 8,
    link: 'https://masterdver.by/images/upholstery/330.jpg',
  },
  {
    id: 9,
    link: 'https://masterdver.by/images/upholstery/350.jpg',
  },
  {
    id: 10,
    link: 'https://masterdver.by/images/upholstery/390.jpg',
  },
  {
    id: 11,
    link: 'https://masterdver.by/images/upholstery/399.jpg',
  },
]

const slides1 = [
  {
    id: 0,
    link: 'https://masterdver.by/images/upholstery/420.jpg',
  },
  {
    id: 1,
    link: 'https://masterdver.by/images/upholstery/430.jpg',
  },
  {
    id: 2,
    link: 'https://masterdver.by/images/upholstery/440.jpg',
  },
  {
    id: 3,
    link: 'https://masterdver.by/images/upholstery/450.jpg',
  },
  {
    id: 4,
    link: 'https://masterdver.by/images/upholstery/470.jpg',
  },
  {
    id: 5,
    link: 'https://masterdver.by/images/upholstery/490.jpg',
  },
  {
    id: 6,
    link: 'https://masterdver.by/images/upholstery/420.jpg',
  },
  {
    id: 7,
    link: 'https://masterdver.by/images/upholstery/430.jpg',
  },
  {
    id: 8,
    link: 'https://masterdver.by/images/upholstery/440.jpg',
  },
  {
    id: 9,
    link: 'https://masterdver.by/images/upholstery/450.jpg',
  },
  {
    id: 10,
    link: 'https://masterdver.by/images/upholstery/470.jpg',
  },
  {
    id: 11,
    link: 'https://masterdver.by/images/upholstery/490.jpg',
  },
]

const otherImages = [
  {
    id: 0,
    link: img11,
  },
  {
    id: 1,
    link: img12,
  },
  {
    id: 2,
    link: img13,
  },
  {
    id: 3,
    link: img14,
  },
  {
    id: 4,
    link: img15,
  },
  {
    id: 5,
    link: img16,
  },
  {
    id: 6,
    link: img17,
  },
  {
    id: 7,
    link: img18,
  },
  {
    id: 8,
    link: img19,
  },
  {
    id: 9,
    link: img20,
  },
  {
    id: 10,
    link: img21,
  },
  {
    id: 11,
    link: img22,
  },
  {
    id: 12,
    link: img23,
  },
  {
    id: 13,
    link: img24,
  },
  {
    id: 14,
    link: img25,
  },
  {
    id: 15,
    link: img26,
  },
  {
    id: 16,
    link: img27,
  },
  {
    id: 17,
    link: img28,
  },
]
</script>

<template>
  <Header />
  <section class="flex flex-col items-center py-10 px-4">
    <p class="pb-10 text-3xl tracking-wide">Виды услуг и стоимость</p>
    <div class="w-full max-w-240">
      <PriceTable />
    </div>
  </section>

  <section class="flex flex-col py-10 px-4">
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col w-full">
        <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
          Образцы материалов для обивки дверей от Российского производителя:
        </p>
        <div class="w-full max-w-250 mx-auto">
          <SkinSlider :data="slides" />
          <SkinSlider :data="slides1" :reverse="true" />
        </div>
      </div>

      <div class="flex flex-col w-full">
        <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
          Образцы материалов для обивки дверей от Польского производителя:
        </p>
        <div class="w-full max-w-250 mx-auto">
          <SkinSlider :data="slides1" :reverse="true" />
        </div>
      </div>
      <div class="flex flex-col w-full">
        <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
          Образцы отделки дверей ДВП:
        </p>
        <div class="w-full max-w-250 mx-auto">
          <!-- <SkinSlider /> -->
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-[#eff5ff] p-10 mb-10">
      <HowWeWork />
    </div>
  </section>

  <section>
    <div>
      <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
        Примеры работы до/после
      </p>
      <div class="flex flex-row flex-wrap gap-10 items-center justify-center">
        <div v-for="item in portfolio" :key="item.id">
          <img class="w-100 h-200 object-cover" :src="item.link" />
        </div>
      </div>
    </div>
    <div class="pb-20">
      <p class="pb-10 text-3xl mx-auto tracking-wide text-center m-20">
        Остальные работы
      </p>

      <div class="w-full max-w-400 mx-auto">
        <SkinSlider :data="otherImages" :resize="true" />
      </div>
    </div>
  </section>

  <Footer />
</template>
