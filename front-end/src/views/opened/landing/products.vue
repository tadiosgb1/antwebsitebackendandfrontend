<template>
  <div class="min-h-screen bg-white">
    <Header />

    <section class="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
  <div class="absolute inset-0 opacity-[0.15]" 
       style="background-image: radial-gradient(#64748b 0.5px, transparent 0.5px); background-size: 32px 32px;"></div>
  
  <div class="max-w-7xl mx-auto relative z-10">
    <div class="max-w-3xl">
      <h1 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6 animate-fade-in">
        Enterprise Ecosystem
      </h1>
      
      <h2 class="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter italic leading-tight animate-slide-up">
        Advanced <span class="text-orange-500">Solutions</span> for Digital Dominance.
      </h2>
      
      <p class="mt-8 text-xl text-slate-600 font-medium leading-relaxed animate-slide-up" style="animation-delay: 0.1s">
        Explore our suite of high-performance proprietary systems, engineered to automate complexity and drive scalable growth across industries.
      </p>
    </div>
  </div>

  <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
</section>

    <section class="py-24 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="i in 2" :key="i" class="h-[500px] bg-slate-50 rounded-[3rem] animate-pulse"></div>
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <article 
            v-for="(product, index) in solutions" 
            :key="product.id"
            class="solution-card group relative"
            :style="{ '--delay': `${index * 0.2}s` }"
          >
            <div class="relative h-[400px] overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl transition-all duration-700 group-hover:shadow-orange-500/10">
              <img 
                :src="product.thumbnail" 
                :alt="product.title"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div class="absolute top-8 left-8">
                <span class="px-5 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  {{ product.industry }}
                </span>
              </div>

              <div class="absolute bottom-0 inset-x-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div class="bg-slate-900/80 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10">
                  <p class="text-[9px] font-black text-orange-500 uppercase tracking-widest mb-2">Engineered with</p>
                  <p class="text-white font-bold text-sm tracking-tight">{{ product.technologies }}</p>
                </div>
              </div>
            </div>

            <div class="mt-10 px-4">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-3xl font-black text-slate-900 tracking-tighter italic group-hover:text-orange-600 transition-colors">
                  {{ product.title }}
                </h3>
                <div class="h-px flex-grow bg-slate-100 mx-6 hidden md:block"></div>
                <span class="text-slate-300 font-black italic text-4xl group-hover:text-orange-100 transition-colors">0{{ index + 1 }}</span>
              </div>
              
              <p class="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                {{ product.description }}
              </p>

              <div class="flex items-center space-x-8">
                <router-link :to="`/solutions/${product.slug}`" class="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-orange-500 pb-1 hover:text-orange-600 transition-colors">
                  View Case Study
                </router-link>
                
                <a v-if="product.demo_url" :href="product.demo_url" target="_blank" class="flex items-center text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                  Live Demo
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-slate-50">
      <div class="max-w-5xl mx-auto text-center">
        <div class="inline-block p-4 bg-orange-100 rounded-3xl mb-8">
          <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-2.828 0l-.586.586-2.828-2.828.586-.586a2 2 0 000-2.828l-9.899-9.899a2 2 0 00-2.828 0l-4.242 4.242a2 2 0 000 2.828l9.899 9.899a2 2 0 002.828 0l.586-.586 2.828 2.828-.586.586a2 2 0 000 2.828l9.899 9.899a2 2 0 002.828 0l4.242-4.242a2 2 0 000-2.828l-9.899-9.899z" /></svg>
        </div>
        <h4 class="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter mb-6">Need a custom architecture?</h4>
        <p class="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
          Our engineering team specializes in building bespoke B2B systems from the ground up. Let's discuss your specific requirements.
        </p>
        <router-link to="/contact-us" class="inline-flex items-center px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-orange-600 shadow-2xl">
          Consult with Experts
        </router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";

export default {
  name: "SolutionsPage",
  components: { Header, Footer },
  data() {
    return {
      solutions: [],
      loading: false
    };
  },
  async mounted() {
    await this.fetchSolutions();
  },
  methods: {
    async fetchSolutions() {
      this.loading = true;
      try {
        // As requested: the endpoint is "/solutions"
        const response = await this.$apiGet('/solutions');
        this.solutions = response.data;
      } catch (err) {
        console.error("Solutions Error:", err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.solution-card {
  opacity: 0;
  transform: translateY(40px);
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>