<template>
  <div class="min-h-screen bg-white">
    <Header />

    <section class="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6 animate-fade-in">Our Capabilities</h1>
          <h2 class="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter italic leading-none">
            Solutions Tailored for <span class="text-orange-500">Enterprise</span> Growth.
          </h2>
          <p class="mt-8 text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
            From architecture to deployment, we provide the technical infrastructure that allows modern businesses to outpace the competition.
          </p>
        </div>
      </div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="i in 3" :key="i" class="h-80 bg-slate-50 rounded-[2.5rem] animate-pulse"></div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <article 
            v-for="(service, index) in services" 
            :key="service.id"
            class="service-card group relative p-10 bg-white border border-slate-100 rounded-[3rem] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-4 overflow-hidden"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-[5rem] group-hover:bg-orange-500/10 transition-colors duration-700"></div>

            <div class="relative z-10 mb-8">
              <div class="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl group-hover:bg-orange-600 transition-colors duration-500">
                <img 
                  v-if="service.icon" 
                  :src="service.icon" 
                  :alt="service.title" 
                  class="w-10 h-10 object-contain brightness-0 invert"
                />
                <svg v-else class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>

            <div class="relative z-10">
              <h3 class="text-2xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-orange-600 transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-slate-500 font-medium leading-relaxed mb-8">
                {{ service.description }}
              </p>
              
              <div class="flex items-center text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-orange-600 transition-all">
                <span>Discovery Phase</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"></div>
          <div class="relative z-10">
            <h4 class="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-8">
              Ready to transform your <br />digital architecture?
            </h4>
            <router-link 
              to="/contact" 
              class="inline-block px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1"
            >
              Start Your Project
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";

export default {
  name: "ServicesPage",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      services: [],
      loading: false
    };
  },
  async mounted() {
    await this.fetchServices();
  },
  methods: {
    async fetchServices() {
      this.loading = true;
      try {
        // As requested: the endpoint is "/service"
        const response = await this.$apiGet('/service');
        this.services = response.data;
      } catch (err) {
        console.error("Service Fetch Error:", err);
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
  transform: translateY(30px);
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.text-shadow {
  text-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
}
</style>