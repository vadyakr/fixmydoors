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

const isOpenModal = ref(false)
const linkRef = ref('')

const openModal = (e: boolean, link?: string) => {
  linkRef.value = link || ''
  isOpenModal.value = e
  if (e) {
    document.body.style.overflow = 'hidden'
  } else {
  }
}

const closeModal = () => {
  isOpenModal.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <div
    v-for="item in portfolio"
    :key="item.id"
    class="max-w-75 w-full h-150 object-cover flex cursor-pointer"
    @click="openModal(true, item.link)"
  >
    <img class="w-full h-full object-cover" alt="Portfolio" :src="item.link" />
  </div>

  <Modal :is-open="isOpenModal" :link="linkRef" @click="closeModal()" />
</template>
