<script lang="ts" setup>
withDefaults(
  defineProps<{
    reverse?: boolean
  }>(),
  {
    reverse: false,
  },
)

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
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: reverse,
    }"
    :breakpoints="{
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <img :src="slide.link" class="object-cover w-full h-50" />
    </SwiperSlide>
  </Swiper>

  <Swiper
    :modules="[SwiperAutoplay]"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: reverse,
    }"
    :breakpoints="{
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
  >
    <SwiperSlide v-for="slide in slides1" :key="slide.id">
      <img :src="slide.link" class="object-cover w-full h-50" />
    </SwiperSlide>
  </Swiper>
</template>
