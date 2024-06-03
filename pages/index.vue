<script lang="ts" setup></script>

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
          <SkinSlider />
        </div>
      </div>

      <div class="flex flex-col w-full">
        <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
          Образцы материалов для обивки дверей от Польского производителя:
        </p>
        <div class="w-full max-w-250 mx-auto">
          <SkinSlider :reverse="true" />
        </div>
      </div>
      <div class="flex flex-col w-full">
        <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
          Образцы отделки дверей ДВП:
        </p>
        <div class="w-full max-w-250 mx-auto">
          <SkinSlider />
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>
