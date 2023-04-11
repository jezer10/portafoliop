<script>
export default {
  data: () => ({
    summary: [
      "branding",
      "fotografía",
      "identidad corporativa",
      "ilustración",
      "publicidad",
      "diseño editorial",
    ],
    contacts: [
      {
        icon: "fa-solid fa-phone",
        value: "976387055",
      },
      {
        icon: "fa-brands fa-instagram",
        value: "@itsnoe",
      },
      {
        icon: "fa-solid fa-envelope",
        value: "noe@noreply.com",
      },
    ],
  }),
};
</script>

<template>
  <div class="h-screen bg-orange-500 text-white">
    <div class="flex">
      <img
        class="flex-none w-96 h-96 object-contain"
        src="./assets/images/logo.png"
        alt=""
      />
      <div>
        <h2 class="text-8xl">Noelia Sancarranco</h2>
        <h1 class="text-[200px] break-words text-white font-bold">
          Portafolio
        </h1>
        <h3 class="text-8xl">Diseño Gráfico / Ilustración</h3>
      </div>
    </div>
  </div>
  <div class="h-screen font-acumin bg-red-100 flex flex-col">
    <div class="flex gap-6 justify-center py-4 uppercase text-xl font-light">
      <span>IDENTIDAD CORPORATIVA</span>
      <span>DISEÑO EDITORIAL</span>
      <span>ILUSTRACIÓN DIGITAL</span>
      <span>ILUSTRACIÓN MANUAL</span>
      <span>PUBLICIDAD</span>
      <span>FOTOGRAFÍA</span>
    </div>
    <div class="h-full bg-red-500 p-16 flex items-center justify-center">
      <img src="./assets/images/polarr.png" class="h-full" />
    </div>
    <div class="p-4 flex justify-between">
      <div class="flex items-center gap-2" v-for="contact in contacts">
        <div
          class="rounded-full w-12 h-12 text-white bg-black flex items-center justify-center text-2xl"
        >
          <i :class="contact.icon"></i>
        </div>
        <div class="text-xl">{{ contact.value }}</div>
      </div>
    </div>
  </div>
  <div class="h-screen py-12 px-8">
    <div class="w-full h-full flex">
      <div class="flex flex-col text-4xl gap-12 p-8 text-yellow-400">
        <i class="fa-solid fa-wand-sparkles" v-for="i in 4"></i>
      </div>
      <div class="flex items-center w-full flex-col">
        <h1 class="text-9xl">Dominio de software</h1>
        <div class="flex flex-col items-center gap-4">
          <div class="flex gap-4">
            <img
              src="./assets/images/photoshop.png"
              class="rounded-full w-48 h-48 bg-cover"
            />
            <img
              src="./assets/images/illustrator.png"
              class="rounded-full w-48 h-48 bg-cover"
            />
            <img
              src="./assets/images/lightroom.png"
              class="rounded-full w-48 h-48 bg-cover"
            />
            <img
              src="./assets/images/indesign.png"
              class="rounded-full w-48 h-48 bg-cover"
            />
          </div>
          <div class="flex gap-4">
            <img
              src="./assets/images/polarr.png"
              class="rounded-full w-48 h-48 bg-cover"
            /><img
              src="./assets/images/figma.png"
              class="rounded-full w-48 h-48 bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen font-acumin p-8">
    <div class="flex items-center gap-16 h-full">
      <div>
        <div class="text-[220px] leading-none flex flex-col font-bold">
          <div class="text-orange-500">CON</div>
          <div class="outlined-text">TENI</div>
          <div class="text-orange-500">DO</div>
        </div>
      </div>
      <div>
        <div class="flex flex-col text-7xl">
          <div class="flex gap-4" v-for="(k, i) in summary">
            <div class="outlined-text">{{ `0${i + 1}` }}</div>
            <div class="text-orange-500 uppercase">{{ k }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen p-16">
    <div class="h-full flex items-center justify-center text-[200px] relative">
      <div
        class="top-0 left-0 bg-orange-500 absolute w-1/2 h-full pt-12 pl-12 -z-10"
      >
        <div class="h-full w-full bg-white"></div>
      </div>

      <div class="outlined-orange-text">Branding</div>
    </div>
  </div>
  <div class="h-screen">
    <div class="h-full flex">
      <div class="w-1/2 flex items-center justify-center h-full">
        <img src="./assets/images/logo.png" class="h-full" />
      </div>
      <div
        class="w-1/2 bg-orange-500 p-16 font-acumin text-white flex flex-col gap-8"
      >
        <div>
          <div class="text-5xl">LOGO NAMING</div>
          <div class="text-3xl">
            El nombre es parte de lo que soy, de mi vida y de todo lo que
            conlleva, de mis sueños y aspiraciones, entonces, ¿qué podría ser un
            símbolo más icónico que mi nombre?
          </div>
        </div>
        <div>
          <div class="text-5xl">TIPOGRAFÍA</div>
          <div class="font-billion-dreams uppercase text-4xl">
            a b c d e f g h i j k l m n ñ o p q r s t u v w x y z
          </div>
          <div class="font-billion-dreams text-4xl">
            a b c d e f g h i j k l m n ñ o p q r s t u v w x y z
          </div>
        </div>
        <div>
          <div class="text-5xl">COLORES CORPORATIVOS</div>
          <div class="flex gap-4">
            <div class="w-16 h-16 rounded-full bg-black"></div>
            <div class="w-16 h-16 rounded-full bg-white"></div>
            <div class="w-16 h-16 rounded-full bg-orange-600"></div>
          </div>
        </div>
        <div>
          <div class="text-5xl">ILUSTRACIÓN</div>
          <div class="text-3xl">El personaje soy yo en versión animada</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outlined-text {
  color: white;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
}

.outlined-orange-text {
  color: white;
  text-shadow: -6px -6px 0 #000, -6px -6px 0 #000;
}
</style>
