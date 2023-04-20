<script>
export default {
  props: {
    informationObject: Object,
  },
  emits: {},
};
</script>

<template>
  <div class="h-screen">
    <div class="h-full flex">
      <div class="w-1/2 h-full">
        <slot  class="w-full h-full"/>
      </div>
      <div
        class="w-1/2 bg-primary-dark h-full font-acumin text-white flex items-center justify-center p-8"
      >
        <div class="flex items-center justify-center">
          <div class="flex flex-col justify-center items-center max-w-md gap-8">
            <div>
              <div class="text-6xl font-medium uppercase text-center">
                {{ informationObject.title }}
              </div>
              <div class="h-2 w-full px-12">
                <div class="h-full w-full bg-primary-light"></div>
              </div>
            </div>
            <div class="text-2xl">
              {{ informationObject.description }}
            </div>
            <div class="flex flex-row items-center gap-4">
              <span>Realizado en:</span>
              <div
                v-for="item in informationObject.platforms"
                class="flex gap-2 items-center rounded-lg px-4 py-2 border-2 text-black border-black font-bold text-2xl"
              >
                <img :src="item.icon" alt="polarr" class="w-6 h-6 rounded-md" />
                <div class="leading-none">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
