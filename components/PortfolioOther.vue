<script lang="ts" setup>
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
  <SkinSlider :data="otherImages" :resize="true" />
</template>
