<template>
  <div class="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
    <div class="absolute inset-0 z-0">
      <transition-group name="fade">
        <div 
          v-for="(image, index) in backgrounds" 
          :key="image"
          v-show="currentSlide === index"
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-110"
          :class="{ 'scale-100': currentSlide === index }"
          :style="{ backgroundImage: `url(${image})` }"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
      </transition-group>
    </div>

    <div class="container mx-auto px-6 relative z-10 mt-16">
      <div class="max-w-3xl">
        <div class="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 backdrop-blur-md px-4 py-2 rounded-full mb-8">
          <span class="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span class="text-orange-400 text-xs font-bold uppercase tracking-widest">
            Ethiopia's Premier B2B Network
          </span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
          The Backbone of <br />
          <span class="text-orange-500">Ethiopian Commerce.</span>
        </h1>

        <p class="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
          Ant bridges the gap between massive supply and local retail. Powering the economy through 
          <span class="text-orange-500 font-semibold  decoration-orange-500">proximity-based logistics</span> 
          and flexible <span class="text-white font-semibold">Buy Now, Pay Later</span> financing.
        </p>

     <div class="flex flex-wrap gap-5 mb-16">
        <a
          href="https://admin.ant.et/login"
          target="_blank"
          rel="noopener noreferrer"
          class="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-2xl shadow-orange-500/20 inline-flex items-center justify-center"
        >
          Join as a Retailer
        </a>

        <a
          href="https://b2bretailer.sunriseworld.org"
          target="_blank"
          rel="noopener noreferrer"
          class="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl transition-all inline-flex items-center justify-center"
        >
          Supply Products
        </a>
      </div>


        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
          <div class="flex flex-col">
            <span class="text-orange-500 text-2xl font-bold">Smart-Route</span>
            <span class="text-slate-400 text-sm">Nearest Driver Logic</span>
          </div>
          <div class="flex flex-col">
            <span class="text-orange-500 text-2xl font-bold">Instant Credit</span>
            <span class="text-slate-400 text-sm">BNPL Solutions</span>
          </div>
          <div class="flex flex-col">
            <span class="text-orange-500 text-2xl font-bold">Direct Access</span>
            <span class="text-slate-400 text-sm">Verified Suppliers</span>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 right-10 flex space-x-3">
      <div 
        v-for="(_, i) in backgrounds" 
        :key="i"
        @click="currentSlide = i"
        class="h-1 transition-all duration-500 cursor-pointer"
        :class="currentSlide === i ? 'w-12 bg-orange-500' : 'w-6 bg-white/30'"
      ></div>
    </div>
  </div>
</template>

<script>
  import bg1 from '../../../assets/img/hero/bg1.jpg';
   import bg2 from '../../../assets/img/hero/bg2.jpg';
export default {
  name: 'AntHero',
  data() {
    return {
      currentSlide: 0,
      backgrounds: [
        // Supplier / Warehouse Image
        bg1,
        // Retail / Shop Image
       bg2,
        // Logistics / Driver Image
       bg2,
      ],
      timer: null
    };
  },
  mounted() {
    this.startRotation();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    startRotation() {
      this.timer = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.backgrounds.length;
      }, 6000);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Subtle zoom effect for that "Premium" feel */
.scale-110 {
  transform: scale(1.1);
}
.scale-100 {
  transform: scale(1.0);
}
</style>