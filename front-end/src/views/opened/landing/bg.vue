<template>
  <section class="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
    <div class="flex flex-col lg:flex-row w-full items-stretch">
      
      <transition name="slide-right" appear>
        <div class="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
          <img 
            src="../../../assets/img/b2b2.JPG" 
            alt="Ant B2B Marketplace" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"></div>
          <div class="absolute bottom-10 left-10 hidden md:block">
            <div class="bg-orange-500 text-white px-6 py-3 rounded-tr-3xl font-bold shadow-2xl">
              Pioneering Ethiopian B2B
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade-up" appear>
        <div class="lg:w-1/2 flex items-center px-8 py-16 lg:px-20 bg-slate-50 relative">
          <div class="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <svg width="200" height="200" fill="currentColor" class="text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
            </svg>
          </div>

          <div class="max-w-xl relative z-10">
            <h2 class="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              The Next Evolution
            </h2>
            <h1 class="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              Empowering Retailers <br /> 
              <span class="text-slate-500">with Credit & Logistics.</span>
            </h1>
            
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Ant isn't just a marketplace; it's a financial and logistical engine. 
              We calculate the nearest driver to your shop for lightning-fast delivery 
              and provide the inventory capital you need through our 
              <span class="text-orange-500 font-semibold italic">Buy Now, Pay Later</span> program.
            </p>

            <div class="flex items-center space-x-6">
              <router-link 
                to="/about" 
                class="group flex items-center space-x-3 text-slate-900 font-bold hover:text-orange-500 transition-colors"
              >
                <span class="border-b-2 border-orange-500 pb-1">Read More About Ant</span>
                <div class="p-2 bg-white rounded-full shadow-sm group-hover:translate-x-2 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </section>
</template>

<script>
export default {
  name: 'B2BFeatureSection',
  data() {
    return {
      isVisible: false
    }
  }
}
</script>

<style scoped>
/* Slide from Left for the Image */
.slide-right-enter-active {
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

/* Fade Up for Content */
.fade-up-enter-active {
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.3s; /* Content appears slightly after image */
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* Hover state for the text underline */
.group:hover span {
  border-color: #0f172a; /* transitions to slate-900 on hover */
}
</style>