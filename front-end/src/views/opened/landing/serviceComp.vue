<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-4 italic">Core Capabilities</h2>
          <h3 class="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter italic leading-none">
            Strategic <span class="text-orange-500">Service</span> Architecture.
          </h3>
        </div>
        <router-link 
          to="/services" 
          class="group flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-orange-600 transition-all"
        >
          Explore All Services
          <div class="ml-4 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all duration-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </router-link>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="i in 3" :key="i" class="h-80 bg-slate-50 rounded-[3rem] animate-pulse"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article 
          v-for="(service, index) in limitedServices" 
          :key="service.id"
          class="service-card group relative p-10 bg-white border border-slate-100 rounded-[3rem] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-3 overflow-hidden"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-[5rem] group-hover:bg-orange-500/10 transition-colors duration-700"></div>

          <div class="relative z-10 mb-8">
            <div class="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-orange-600 transition-all duration-500 group-hover:rotate-6">
              <img 
                v-if="service.icon" 
                :src="service.icon" 
                :alt="service.title" 
                class="w-8 h-8 object-contain brightness-0 invert"
              />
              <svg v-else class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>

          <div class="relative z-10">
            <h4 class="text-2xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-orange-600 transition-colors">
              {{ service.title }}
            </h4>
            <p class="text-slate-500 font-medium text-sm leading-relaxed mb-8 line-clamp-3">
              {{ service.description }}
            </p>
            
            <router-link :to="`/services/${service.id}`" class="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-orange-600 transition-all">
              Learn More
              <svg class="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceComp",
  data() {
    return {
      services: [],
      loading: false
    };
  },
  computed: {
    // This ensures only the first 3 items are shown on the Home Page
    limitedServices() {
      return this.services.slice(0, 3);
    }
  },
  async mounted() {
    await this.fetchServices();
  },
  methods: {
    async fetchServices() {
      this.loading = true;
      try {
        const response = await this.$apiGet('/service');
        // Extracting the data array from your response structure
        this.services = response.data || [];
      } catch (err) {
        console.error("Home Service Fetch Error:", err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.service-card {
  opacity: 0;
  transform: translateY(20px);
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>