<script>
import Sparkle from './Sparkle.vue';

export default {
  props: {
    title: String,
  },
  components: { Sparkle },
};
</script>

<template>
  <div class=" sm:h-screen">
    <div
      class="h-full flex items-center justify-center text-sm sm:text-[120px] leading-[9rem] relative"
    >
      <img
        src="@/assets/images/owao.png"
        class="absolute w-full h-full -z-10"
      />
      <div class="absolute inset-0 h-full w-full p-4 sm:p-20">
        <div class="h-full w-full relative">
          <div
            class="top-0 left-0 bg-primary-light absolute w-1/2 h-full pt-2 pl-2 sm:pt-6 sm:pl-6 -z-20"
          >
            <div class="h-full w-full bg-white">
              <div class="flex flex-col gap-2 sm:gap-8   sm:pt-4 sm:pl-4">
                <div class="flex flex-row text-4xl text-primary-light gap-2 sm:gap-8">
                  <Sparkle
                    class="w-4 h-4 sm:w-12 sm:h-12 text-primary-light"
                    v-for="i in 4"
                  />
                </div>
                <div class="flex flex-col text-4xl text-primary-light gap-2 sm:gap-8">
                  <Sparkle
                    class="w-4 h-4 sm:w-12 sm:h-12 text-primary-light"
                    v-for="i in 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="outlined-orange-text break-normal text-center">
        {{ title }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.outlined-orange-text {
  color: white;
  text-shadow: rgb(248, 159, 30) 3px 0px 0px,
    rgb(248, 159, 30) 2.83487px 0.981584px 0px,
    rgb(248, 159, 30) 2.35766px 1.85511px 0px,
    rgb(248, 159, 30) 1.62091px 2.52441px 0px,
    rgb(248, 159, 30) 0.705713px 2.91581px 0px,
    rgb(248, 159, 30) -0.287171px 2.98622px 0px,
    rgb(248, 159, 30) -1.24844px 2.72789px 0px,
    rgb(248, 159, 30) -2.07227px 2.16926px 0px,
    rgb(248, 159, 30) -2.66798px 1.37182px 0px,
    rgb(248, 159, 30) -2.96998px 0.42336px 0px,
    rgb(248, 159, 30) -2.94502px -0.571704px 0px,
    rgb(248, 159, 30) -2.59586px -1.50383px 0px,
    rgb(248, 159, 30) -1.96093px -2.27041px 0px,
    rgb(248, 159, 30) -1.11013px -2.78704px 0px,
    rgb(248, 159, 30) -0.137119px -2.99686px 0px,
    rgb(248, 159, 30) 0.850987px -2.87677px 0px,
    rgb(248, 159, 30) 1.74541px -2.43999px 0px,
    rgb(248, 159, 30) 2.44769px -1.73459px 0px,
    rgb(248, 159, 30) 2.88051px -0.838247px 0px;
}
</style>
