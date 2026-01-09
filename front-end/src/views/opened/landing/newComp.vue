<template>
  <section class="py-20 bg-white">
    <div class=" max-w-7xl mx-auto px-6">
      
      <div class="mb-12 border-l-4 border-orange-500 pl-6 animate-fade-in">
        <h2 class="text-4xl font-black text-slate-900 tracking-tight italic">Latest News</h2>
        <p class="text-slate-500 mt-2 text-lg font-medium">Inside the B2B revolution in Ethiopia.</p>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="i in 3" :key="i" class="bg-slate-50 rounded-2xl h-80 animate-pulse border border-slate-100"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <article 
          v-for="item in featuredNews" 
          :key="item.id" 
          class="group bg-white rounded-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              v-if="item.image"
              :src="item.image" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center p-6 text-center">
              <span class="text-gray-400 font-black text-xs uppercase tracking-widest">{{ item.title }}</span>
            </div>



<!-- 
            <div class="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-lg z-10">
              <span class="text-[10px] font-black uppercase tracking-widest">
                {{ item.Category.name }}
              </span>
            </div> -->
          </div>

          <div class="p-6 flex-grow flex flex-col">
            <div class="text-slate-400 text-[10px] font-bold mb-3 uppercase tracking-tighter">
              {{ formatDate(item.createdAt) }}
            </div>
            
            <h3 class="text-lg font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
              {{ item.title }}
            </h3>
            
            <div v-if="item.video" class="mt-4 rounded-lg overflow-hidden bg-slate-900 aspect-video relative group/vid">
              <video 
                :src="item.video" 
                class="w-full h-full object-cover opacity-70 group-hover/vid:opacity-100 transition-opacity"
                muted loop playsinline
                @mouseenter="(e) => e.target.play()"
                @mouseleave="(e) => e.target.pause()"
              ></video>
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none group-hover/vid:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>

            <div class="mt-auto pt-6">
              <router-link :to="`/news/${item.id}`" class="text-slate-900 font-black text-[10px] uppercase tracking-widest group-hover:text-orange-500 flex items-center">
                Details 
                <div class="ml-2 w-4 h-px bg-slate-300 group-hover:w-8 group-hover:bg-orange-500 transition-all"></div>
              </router-link>
            </div>
          </div>
        </article>
      </div>

      <div class="flex justify-center border-t border-slate-100 pt-10">
        <router-link 
          to="/news" 
          class="group flex items-center space-x-4 bg-white border-2 border-slate-900 px-8 py-4 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"
        >
          <span class="text-sm font-black uppercase tracking-[0.2em]">Explore All News</span>
          <div class="bg-orange-500 p-1 rounded-full group-hover:translate-x-2 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "HomeNewsSection",
  data() {
    return {
      news: [],
      loading: false
    };
  },
  computed: {
    featuredNews() {
      // Force exactly 3 items
      return this.news.slice(0, 3);
    }
  },
  async mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      try {
        const response = await this.$apiGet('/news', { page: 1, page_size: 3 });
        this.news = response.data;
      } catch (error) {
        console.error("Widget Error:", error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      });
    }
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>