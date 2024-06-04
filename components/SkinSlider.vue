<script lang="ts" setup>
withDefaults(
  defineProps<{
    data: []
    reverse?: boolean
    resize?: boolean
  }>(),
  {
    reverse: false,
    resize: false,
  },
)

const isOpenModal = ref(false)

const linkRef = ref('')

const openModal = (link?: string, e: boolean) => {
  linkRef.value = link
  isOpenModal.value = e
}
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
    <SwiperSlide v-for="slide in data" :key="slide.id">
      <img
        :src="slide.link"
        class="object-cover w-full cursor-pointer"
        :class="{ 'h-50': !resize, 'h-200': resize }"
        @click="openModal(slide.link, true)"
      />
    </SwiperSlide>
  </Swiper>

  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-9999 flex items-center justify-center"
    v-if="isOpenModal"
  >
    <div
      @click="openModal(false)"
      class="absolute bg-gray bg-opacity-50 w-full h-full mx-auto"
    />
    <div class="flex flex-col bg-white p-20 z-2 relative">
      <div
        class="absolute top-3.5 right-3.5 cursor-pointer hover:opacity-60"
        @click="openModal(false)"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.65644 24.1623L12.8189 15.9998L4.65644 7.8373C3.77519 6.95605 3.77519 5.5373 4.65644 4.65605C5.53769 3.7748 6.95644 3.7748 7.83769 4.65605L16.0002 12.8186L24.1627 4.65605C25.0439 3.7748 26.4627 3.7748 27.3439 4.65605C28.2252 5.5373 28.2252 6.95605 27.3439 7.8373L19.1814 15.9998L27.3439 24.1623C28.2252 25.0436 28.2252 26.4623 27.3439 27.3436C26.4627 28.2248 25.0439 28.2248 24.1627 27.3436L16.0002 19.1811L7.83769 27.3436C6.95644 28.2248 5.53769 28.2248 4.65644 27.3436C3.78144 26.4623 3.78144 25.0373 4.65644 24.1623Z"
            fill="black"
          />
        </svg>
      </div>
      <img :src="linkRef" class="w-100" />
    </div>
  </div>
</template>
