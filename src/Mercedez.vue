<template>
  <div class="font-acumin">
    <div class="p-4 bg-white flex justify-between items-center">
      <img src="@/assets/images/logo_image.png" alt="" class="h-12 w-12 object-contain" />
      <div class="flex gap-4 font-light text-indigo-800 items-center">
        <router-link
          :to="menu.name"
          v-for="menu in menus"
          class="hover:font-bold"
          >{{ menu.name }}</router-link
        >
      </div>
    </div>
    <img src="@/assets/images/car_image.png" alt="" />
    <div class="p-24 flex flex-col gap-8">
      <div class=" text-4xl">Quienes somos</div>
      <div>
        Una infraestructura de carga completa y potente es la piedra angular de
        la electromovilidad. IONITY, una empresa conjunta de fabricantes de
        automóviles de la que Benz forma parte, ha lanzado una campaña para
        ampliar su red de carga de alta potencia.
      </div>
      <div>
        Dado que la sostenibilidad es el principio rector de la estrategia de
        Mercedes-Benz y de la propia empresa, esto significa crear valor
        duradero para todas las partes interesadas.
      </div>
    </div>
    <div class="bg-black h-96">

    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    menus: [
      {
        name: 'Inicio',
      },
      {
        name: 'Nosotros',
      },
      {
        name: 'Productos',
      },
      {
        name: 'Ciencias',
      },
      {
        name: 'Noticias',
      },
      {
        name: 'Contacto',
      },
    ],
  }),
};
</script>
