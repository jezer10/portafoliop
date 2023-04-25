<script>
import CategoryTitle from './components/CategoryTitle.vue';
import PhotoGallery from './components/PhotoGallery.vue';
import QRCode from 'qrcode';
import Sparkle from './components/Sparkle.vue';
export default {
  data: () => ({
    summary: [
      'branding',
      'fotografía',
      'identidad corporativa',
      'ilustración',
      'publicidad',
      'diseño editorial',
    ],
    galleryItems: [
      {
        title: 'Familiar',
        description: `Es un proyecto personal dedicado para todas las Madres, en el marco del Día de las Madres que se celebra el 2do domingo de Mayo en Perú.`,
        platforms: [
          {
            name: 'Lightroom',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Producto',
        description: `Es un proyecto personal que se realizo en el curso Producción Fotográfica, realice una publicidad y he tomado la foto con la camara Cannon.`,
        platforms: [
          {
            name: 'Photoshop',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Revista Web',
        description: `Es un proyecto dupla que se realizo en el curso Proyecto Digital, hemos realizado revista publicada online de 36 páginas sobre el tema MUNDO VERDE.`,
        platforms: [
          {
            name: 'Polarr',
            icon: 'https://play-lh.googleusercontent.com/kqM1zv_3Uhq2NyVLJLLH6iRhXdeLQCxQZdFTqt1yZKAgYicbtyvQwh99LbuccecIDtra',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Infografía animada',
        description: `Es un proyecto dupla que se realizo en el curso Taller Infografía, hemos realizado infografia animada de la película LA ERA DE HIELO.`,
        platforms: [
          {
            name: 'Illustrator',
            icon: 'https://logodownload.org/wp-content/uploads/2017/04/adobe-Illustrator-logo-1-1.png',
          },
          {
            name: 'Photoshop',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Bebida',
        description: `Es un proyecto que he realizado en un curso Producción Fotográfica, las fotos fueron tomadas con una cámara CANON con la técnica de Velocidad de Obturación para poder captar la salpicadura de agua.`,
        platforms: [
          {
            name: 'Lightroom',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Empresa',
        description: `Es un proyecto que he realizado en el curso de Branding, rediseñé el logo para la empresa agropecuaria ROJAL VERDE estilo Minimalista.`,
        platforms: [
          {
            name: 'Illustrator',
            icon: 'https://logodownload.org/wp-content/uploads/2017/04/adobe-Illustrator-logo-1-1.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Medicina',
        description: `Es un proyecto que he realizado en el curso de Branding, rediseñé el logo para un profesional de MEDICINA INTERNA estilo Minimalista de color azul.`,
        platforms: [
          {
            name: 'Illustrator',
            icon: 'https://logodownload.org/wp-content/uploads/2017/04/adobe-Illustrator-logo-1-1.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Retrato',
        description: `Este es un proyecto personal, en el que he dibujado a un ser querido que aprecio muchísimo y se fue a cumplir sus sueños en el cielo.`,
        platforms: [
          {
            name: 'Photoshop',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Caricatura',
        description: `Es un proyecto personal, he realizado ese dibujo de la película BIG HERO 6 ya que es mi pelicula animada favorita y la dibujé en versión CHIBIS`,
        platforms: [
          {
            name: 'Photoshop',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Producto',
        description: `Es un proyecto personal que se realizo en el curso Producción Fotográfica, realice una publicidad y he tomado la foto con la camara Cannon.`,
        platforms: [
          {
            name: 'Illustrator',
            icon: 'https://logodownload.org/wp-content/uploads/2017/04/adobe-Illustrator-logo-1-1.png',
          },
          {
            name: 'Lightroom',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
      {
        title: 'Revista Web',
        description: `Es un proyecto dupla que se realizo en el curso Proyecto Digital, hemos realizado revista publicada online de 36 páginas sobre el tema MUNDO VERDE.`,
        platforms: [
          {
            name: 'InDesign',
            icon: 'https://images.sftcdn.net/images/t_app-icon-m/p/3b1b32da-96d2-11e6-b9f4-00163ed833e7/2551636004/adobe-indesign-Screenshot_1.png',
          },
          {
            name: 'Lightroom',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png',
          },
          {
            name: 'Photoshop',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png',
          },
        ],
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtiDK4fFL5T5mzLik11Z4W_eyw16CThgB-A&usqp=CAU',
      },
    ],
    contacts: [
      {
        icon: 'fa-solid fa-phone',
        value: '976387055',
      },
      {
        icon: 'fa-brands fa-instagram',
        value: '@noeliaartist',
      },
      {
        icon: 'fa-solid fa-envelope',
        value: 'noelia.artistt@gmail.com',
      },
      {
        icon: 'fa-brands fa-behance',
        value: 'Noelia Artist',
      },
    ],
    hobbies: [
      { icon: 'fa-solid fa-tv' },
      { icon: 'fa-solid fa-camera' },
      { icon: 'fa-solid fa-music' },
      { icon: 'fa-solid fa-person-swimming' },
      { icon: 'fa-hoverboard' },
      { icon: 'fa-solid fa-book-open' },
      { icon: 'fa-solid fa-laptop' },
      { icon: 'fa-solid fa-pencil' },
    ],
    imageUrl: '',
  }),
  components: { PhotoGallery, CategoryTitle, Sparkle },
  async mounted() {
    const magazineUrl =
      'https://indd.adobe.com/view/cffec4ce-bcd8-4cde-8e39-693548c95c5e';

    QRCode.toDataURL(magazineUrl, (err, url) => {
      if (err) return console.log(err);
      this.imageUrl = url;
    });
  },
};
</script>

<template>
  <div class="h-screen bg-primary-light text-white">
    <div class="flex items-center justify-center h-full gap-8">
      <div class="h-full py-16">
        <img
          class="flex-none h-full object-contain"
          src="./assets/images/logo.png"
        />
      </div>
      <div class="leading-1 text-white flex flex-col">
        <div class="text-6xl">Noelia Sancarranco</div>
        <img src="@/assets/images/portafolio_logo.png" alt="" />
        <!-- <div
          class="text-[220px] break-words w-[27rem] flex flex-col leading-[10.5rem] outlined-white-text"
        >
          <div class="font-bold">Portafolio</div>
        </div> -->
        <div class="text-6xl">Diseño Gráfico / Ilustración</div>
      </div>
    </div>
  </div>
  <div class="h-screen font-acumin">
    <div class="flex flex-col h-full relative justify-between">
      <div class="flex gap-6 justify-center py-4 uppercase text-xl font-light">
        <span class="h-full truncate">IDENTIDAD CORPORATIVA</span>
        <span class="h-full truncate">DISEÑO EDITORIAL</span>
        <span class="h-full truncate">ILUSTRACIÓN DIGITAL</span>
        <span class="h-full truncate">ILUSTRACIÓN MANUAL</span>
        <span class="h-full truncate">PUBLICIDAD</span>
        <span class="h-full truncate">FOTOGRAFÍA</span>
      </div>
      <div class="flex items-center justify-center absolute inset-0 p-48">
        <img class="h-full" src="@/assets/images/name_logo.png" />
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
  </div>
  <div class="h-screen flex p-8">
    <div class="flex gap-8 w-1/2">
      <div class="flex flex-col gap-4">
        <Sparkle
          class="w-12 h-12 text-primary-light animate-pulse"
          v-for="i in 4"
        />
      </div>
      <div class="font-bold text-5xl flex flex-col gap-8">
        <div>Sobre mí</div>
        <div class="w-72 h-96 relative">
          <img
            src="@/assets/images/profile_image.png"
            class="h-full w-full object-cover"
          />
          <div
            class="w-full h-full absolute border border-primary-light -top-2 -left-2 border-dashed"
          ></div>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex items-center justify-center">
      <div class="flex flex-col max-w-md gap-4">
        <div class="flex flex-col items-center">
          <div class="text-8xl text-center">Noelia Artist</div>
          <div class="h-2 bg-primary-light w-1/2"></div>
        </div>
        <div class="text-2xl font-acumin">
          Hola soy Noelia Sancarranco, diseñadora gráfica y vivo en la ciudad de
          Piura. Me encanta trabajar con todos y estoy emocionada de ofrecer mis
          diseños, sé que ayudarán a mis futuros clientes a ser mas competitivos
          y hacer crecer su mercado.
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen py-12 px-8">
    <div class="w-full h-full flex">
      <div class="flex flex-col text-4xl gap-8 p-8 text-yellow-400">
        <Sparkle class="w-12 h-12 text-primary-light" v-for="i in 4" />
      </div>
      <div class="flex items-center w-full flex-col">
        <h1 class="text-9xl">Hobbies</h1>
        <div class="flex flex-col items-center gap-4">
          <div class="grid grid-cols-4 gap-4">
            <div
              v-for="hobbie in hobbies"
              class="w-32 h-32 text-black border-black border-2 flex items-center justify-center rounded-full text-6xl hover:bg-black hover:text-white transition-colors"
            >
              <i :class="[hobbie.icon]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen py-12 px-8">
    <div class="w-full h-full flex">
      <div class="flex flex-col text-4xl gap-8 p-8 text-yellow-400">
        <Sparkle class="w-12 h-12 text-primary-light" v-for="i in 4" />
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
        <div class="text-[160px] leading-none flex flex-col font-bold">
          <div class="text-orange-500">CON</div>
          <div class="outlined-text">TENI</div>
          <div class="text-orange-500">DO</div>
        </div>
      </div>
      <div>
        <div class="flex flex-col text-6xl">
          <div class="flex gap-4" v-for="(k, i) in summary">
            <div class="outlined-text">{{ `0${i + 1}` }}</div>
            <div class="text-orange-500 uppercase">{{ k }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CategoryTitle title="Branding" />
  <div class="h-screen">
    <div class="h-full flex">
      <div class="w-1/2 flex flex-col items-center justify-center h-full p-32">
        <img src="./assets/images/name_logo.png" class="h-full" />

        <img src="./assets/images/logo.png" class="h-full" />
      </div>
      <div
        class="w-1/2 bg-primary-dark p-16 font-acumin text-white flex flex-col gap-8"
      >
        <div>
          <div class="text-4xl">LOGO NAMING</div>
          <div class="text-2xl">
            El nombre es parte de lo que soy, de mi vida y de todo lo que
            conlleva, de mis sueños y aspiraciones, entonces, ¿qué podría ser un
            símbolo más icónico que mi nombre?
          </div>
        </div>
        <div>
          <div class="text-4xl">TIPOGRAFÍA</div>
          <div class="font-billion-dreams uppercase text-3xl">
            a b c d e f g h i j k l m n ñ o p q r s t u v w x y z
          </div>
          <div class="font-billion-dreams text-3xl">
            a b c d e f g h i j k l m n ñ o p q r s t u v w x y z
          </div>
        </div>
        <div>
          <div class="text-4xl">COLORES CORPORATIVOS</div>
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-full bg-black"></div>
            <div class="w-12 h-12 rounded-full bg-white"></div>
            <div class="w-12 h-12 rounded-full bg-primary-light"></div>
          </div>
        </div>
        <div>
          <div class="text-4xl">ILUSTRACIÓN</div>
          <div class="text-2xl">El personaje soy yo en versión animada</div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen">
    <img
      src="@/assets/images/branding_card.jpeg"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <div class="h-screen">
    <img
      src="@/assets/images/branding_pin.jpg"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <CategoryTitle title="Fotografía" />

  <PhotoGallery :informationObject="galleryItems[0]">
    <template v-slot:image>
      <div class="grid grid-cols-3 grid-rows-2 h-full px-16 py-4 gap-4">
        <img
          src="@/assets/images/familiar_1.png"
          class="w-full h-full object-cover"
        />
        <img
          src="@/assets/images/familiar_2.png"
          class="w-full h-full object-cover"
        />
        <img
          src="@/assets/images/familiar_3.png"
          class="w-full h-full object-cover"
        />
        <img
          src="@/assets/images/familiar_4.png"
          class="w-full h-full col-span-3"
        /></div
    ></template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/photography_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <PhotoGallery :informationObject="galleryItems[4]">
    <template v-slot:image>
      <div class="h-full w-full grid grid-cols-2 p-4 gap-4">
        <img src="@/assets/images/lemon_cup_1.png" alt="" class="w-full" />
        <img
          src="@/assets/images/lemon_cup_2.png"
          alt=""
          class="w-full self-end"
        />
      </div>
    </template>
  </PhotoGallery>
  <CategoryTitle title="Identidad Corporativa" />
  <PhotoGallery :informationObject="galleryItems[5]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center p-24">
        <img src="@/assets/images/rojal_verde_log.png" class="w-full" />
      </div>
    </template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/rojal_verde_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <PhotoGallery :informationObject="galleryItems[6]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center p-24">
        <img src="@/assets/images/dr_jose_logo.png" class="w-full" />
      </div>
    </template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/dr_jose_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <CategoryTitle title="Ilustración" />
  <PhotoGallery :informationObject="galleryItems[7]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center p-24">
        <img src="@/assets/images/jefe_ilustracion.png" class="w-full" />
      </div>
    </template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/jefe_ilustracion_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <PhotoGallery :informationObject="galleryItems[8]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center p-24">
        <img
          src="@/assets/images/big_hero_ilustracion.png"
          class="w-full"
        /></div
    ></template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/big_hero_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <CategoryTitle title="Publicidad" />

  <PhotoGallery :informationObject="galleryItems[1]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center p-24">
        <img src="@/assets/images/producto_card.png" class="w-full" />
      </div>
    </template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/producto_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <PhotoGallery :informationObject="galleryItems[9]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center p-24">
        <img src="@/assets/images/vino_banner.png" class="w-full" /></div
    ></template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/vino_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <CategoryTitle title="Diseño Editorial" />
  <PhotoGallery :informationObject="galleryItems[10]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center relative">
        <div class="inline-block align-middle relative">
          <img src="@/assets/images/magazine_top.png" />
        </div>
      </div>
    </template>
    <template v-slot:qrcode>
      <div>Si deseas conocer más acerca de la revista</div>
      <img class="w-16 h-16" :src="imageUrl" />
    </template>
  </PhotoGallery>

  <div class="h-screen">
    <img
      src="@/assets/images/ice_age_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <PhotoGallery :informationObject="galleryItems[3]">
    <template v-slot:image>
      <div class="h-full w-full flex items-center justify-center p-24">
        <img src="@/assets/images/ice_age_logo.png" class="w-full" />
      </div>
    </template>
  </PhotoGallery>
  <div class="h-screen">
    <img
      src="@/assets/images/ice_age_banner.png"
      alt="polarr"
      class="w-full h-full object-cover"
    />
  </div>
  <div class="h-screen bg-primary-light">
    <div class="flex flex-col items-center justify-center h-full text-7xl">
      <img src="@/assets/images/name_logo.png" class="h-96" />
      <div class="text-white">¡Gracias por ver mi portafolio!</div>
    </div>
  </div>
</template>

<style scoped>
.fa-hoverboard {
  @apply w-24 h-24;
  background-image: url(@/assets/images/hoverboard.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.outlined-text {
  color: white;
  text-shadow: rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px,
    rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px,
    rgb(0, 0, 0) -0.832294px 1.81859px 0px,
    rgb(0, 0, 0) -1.60229px 1.19694px 0px, rgb(0, 0, 0) -1.97998px 0.28224px 0px,
    rgb(0, 0, 0) -1.87291px -0.701566px 0px,
    rgb(0, 0, 0) -1.30729px -1.5136px 0px,
    rgb(0, 0, 0) -0.421592px -1.95506px 0px,
    rgb(0, 0, 0) 0.567324px -1.91785px 0px,
    rgb(0, 0, 0) 1.41734px -1.41108px 0px,
    rgb(0, 0, 0) 1.92034px -0.558831px 0px;
}

.outlined-white-text {
  color: #f89f1e;
  text-shadow: rgb(255, 255, 255) 14px 0px 0px,
    rgb(255, 255, 255) 13.9643px 0.99915px 0px,
    rgb(255, 255, 255) 13.8574px 1.9932px 0px,
    rgb(255, 255, 255) 13.6798px 2.97709px 0px,
    rgb(255, 255, 255) 13.4324px 3.9458px 0px,
    rgb(255, 255, 255) 13.1166px 4.89438px 0px,
    rgb(255, 255, 255) 12.7338px 5.81801px 0px,
    rgb(255, 255, 255) 12.2862px 6.71196px 0px,
    rgb(255, 255, 255) 11.7758px 7.57168px 0px,
    rgb(255, 255, 255) 11.2054px 8.39279px 0px,
    rgb(255, 255, 255) 10.5779px 9.17109px 0px,
    rgb(255, 255, 255) 9.89637px 9.90262px 0px,
    rgb(255, 255, 255) 9.1644px 10.5837px 0px,
    rgb(255, 255, 255) 8.3857px 11.2107px 0px,
    rgb(255, 255, 255) 7.56423px 11.7806px 0px,
    rgb(255, 255, 255) 6.70419px 12.2904px 0px,
    rgb(255, 255, 255) 5.80995px 12.7375px 0px,
    rgb(255, 255, 255) 4.88609px 13.1197px 0px,
    rgb(255, 255, 255) 3.93731px 13.4349px 0px,
    rgb(255, 255, 255) 2.96844px 13.6817px 0px,
    rgb(255, 255, 255) 1.98444px 13.8586px 0px,
    rgb(255, 255, 255) 0.990321px 13.9649px 0px,
    rgb(255, 255, 255) -0.00885142px 14px 0px,
    rgb(255, 255, 255) -1.00798px 13.9637px 0px,
    rgb(255, 255, 255) -2.00197px 13.8561px 0px,
    rgb(255, 255, 255) -2.98574px 13.6779px 0px,
    rgb(255, 255, 255) -3.95429px 13.43px 0px,
    rgb(255, 255, 255) -4.90268px 13.1135px 0px,
    rgb(255, 255, 255) -5.82606px 12.7302px 0px,
    rgb(255, 255, 255) -6.71972px 12.2819px 0px,
    rgb(255, 255, 255) -7.57912px 11.771px 0px,
    rgb(255, 255, 255) -8.39987px 11.2001px 0px,
    rgb(255, 255, 255) -9.17778px 10.5721px 0px,
    rgb(255, 255, 255) -9.90888px 9.8901px 0px,
    rgb(255, 255, 255) -10.5894px 9.15771px 0px,
    rgb(255, 255, 255) -11.216px 8.37861px 0px,
    rgb(255, 255, 255) -11.7854px 7.55678px 0px,
    rgb(255, 255, 255) -12.2946px 6.69642px 0px,
    rgb(255, 255, 255) -12.7412px 5.8019px 0px,
    rgb(255, 255, 255) -13.1228px 4.87779px 0px,
    rgb(255, 255, 255) -13.4374px 3.92881px 0px,
    rgb(255, 255, 255) -13.6836px 2.95979px 0px,
    rgb(255, 255, 255) -13.8599px 1.97568px 0px,
    rgb(255, 255, 255) -13.9656px 0.981491px 0px,
    rgb(255, 255, 255) -14px -0.0177028px 0px,
    rgb(255, 255, 255) -13.963px -1.01681px 0px,
    rgb(255, 255, 255) -13.8549px -2.01073px 0px,
    rgb(255, 255, 255) -13.676px -2.99439px 0px,
    rgb(255, 255, 255) -13.4274px -3.96278px 0px,
    rgb(255, 255, 255) -13.1104px -4.91096px 0px,
    rgb(255, 255, 255) -12.7265px -5.8341px 0px,
    rgb(255, 255, 255) -12.2777px -6.72749px 0px,
    rgb(255, 255, 255) -11.7662px -7.58656px 0px,
    rgb(255, 255, 255) -11.1948px -8.40695px 0px,
    rgb(255, 255, 255) -10.5663px -9.18446px 0px,
    rgb(255, 255, 255) -9.88384px -9.91513px 0px,
    rgb(255, 255, 255) -9.15101px -10.5952px 0px,
    rgb(255, 255, 255) -8.37152px -11.2213px 0px,
    rgb(255, 255, 255) -7.54933px -11.7901px 0px,
    rgb(255, 255, 255) -6.68864px -12.2989px 0px,
    rgb(255, 255, 255) -5.79384px -12.7449px 0px,
    rgb(255, 255, 255) -4.8695px -13.1259px 0px,
    rgb(255, 255, 255) -3.92032px -13.4399px 0px,
    rgb(255, 255, 255) -2.95114px -13.6854px 0px,
    rgb(255, 255, 255) -1.96692px -13.8611px 0px,
    rgb(255, 255, 255) -0.972662px -13.9662px 0px,
    rgb(255, 255, 255) 0.0265543px -14px 0px,
    rgb(255, 255, 255) 1.02563px -13.9624px 0px,
    rgb(255, 255, 255) 2.01948px -13.8536px 0px,
    rgb(255, 255, 255) 3.00304px -13.6741px 0px,
    rgb(255, 255, 255) 3.97127px -13.4249px 0px,
    rgb(255, 255, 255) 4.91925px -13.1073px 0px,
    rgb(255, 255, 255) 5.84215px -12.7228px 0px,
    rgb(255, 255, 255) 6.73525px -12.2734px 0px,
    rgb(255, 255, 255) 7.594px -11.7614px 0px,
    rgb(255, 255, 255) 8.41402px -11.1895px 0px,
    rgb(255, 255, 255) 9.19114px -10.5604px 0px,
    rgb(255, 255, 255) 9.92138px -9.87756px 0px,
    rgb(255, 255, 255) 10.601px -9.14431px 0px,
    rgb(255, 255, 255) 11.2266px -8.36442px 0px,
    rgb(255, 255, 255) 11.7949px -7.54187px 0px,
    rgb(255, 255, 255) 12.3031px -6.68086px 0px,
    rgb(255, 255, 255) 12.7485px -5.78578px 0px,
    rgb(255, 255, 255) 13.1289px -4.8612px 0px,
    rgb(255, 255, 255) 13.4424px -3.91182px 0px,
    rgb(255, 255, 255) 13.6873px -2.94249px 0px,
    rgb(255, 255, 255) 13.8624px -1.95815px 0px,
    rgb(255, 255, 255) 13.9668px -0.963831px 0px;
}
</style>
