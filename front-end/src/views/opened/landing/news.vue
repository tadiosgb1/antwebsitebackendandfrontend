<template>
  <div class="flex flex-col min-h-screen bg-slate-50">
    <Header />

  <section class="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 -skew-x-12 translate-x-1/4"></div>
  <div class="max-w-7xl mx-auto relative z-10">
    <div class="max-w-3xl">
      <h1 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6 animate-slide-up">
        Industry Intelligence
      </h1>
      <h2 class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter italic leading-none animate-slide-up" style="animation-delay: 0.1s">
        Insights into the <span class="text-orange-500">Future</span> of B2B.
      </h2>
      <p class="mt-8 text-xl text-slate-600 font-medium leading-relaxed animate-slide-up" style="animation-delay: 0.2s">
        Access the latest strategic updates, platform breakthroughs, and market analysis from the Ant B2B ecosystem.
      </p>
    </div>
  </div>
</section>
    
    <main class="flex-grow pt-24 pb-16 px-6">
      <div class="max-w-7xl mx-auto">
    
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="bg-white rounded-2xl h-96 animate-pulse border border-slate-200"></div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <article 
            v-for="item in news" 
            :key="item.id" 
            class="group bg-white r border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div class="relative h-56 overflow-hidden bg-slate-200">
              <img 
                :src="item.image" 
                :alt="item.title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- <div class="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-lg shadow-lg">
                <span class="text-[10px] font-black uppercase tracking-widest">
                  {{ item.Category.name }}
                </span>
              </div> -->
            </div>

            <div class="p-8 flex-grow flex flex-col">
              <div class="flex items-center text-slate-400 text-xs font-bold mb-3 uppercase tracking-tighter">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDate(item.createdAt) }}
              </div>
              
              <h3 class="text-xl font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                {{ item.title }}
              </h3>
              
              <p class="text-slate-600 mt-4 line-clamp-3 text-sm leading-relaxed">
                {{ item.content || 'Innovating the supply chain path from Ethiopian suppliers directly to the retailer shelf.' }}
              </p>

              <div v-if="item.video" class="mt-6">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                  <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></span>
                  Video Highlight
                </p>
                <div class="relative rounded-xl overflow-hidden bg-slate-900 aspect-video shadow-inner group/vid">
                  <video 
                    :src="item.video" 
                    class="w-full h-full object-cover opacity-60 group-hover/vid:opacity-100 transition-opacity"
                    controls
                    muted
                  ></video>
                </div>
              </div>

              <div class="mt-auto pt-8">
                <router-link :to="`/news/${item.id}`" class="flex items-center text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-orange-500 transition-all">
                  <span>View Details</span>
                  <div class="ml-2 w-8 h-px bg-slate-300 group-hover:w-12 group-hover:bg-orange-500 transition-all"></div>
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <div v-if="totalPages > 1" class="flex flex-col items-center pt-10 border-t border-slate-200">
          <div class="flex items-center space-x-3">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="pagination-arrow disabled:opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div class="flex items-center space-x-2">
              <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="['page-btn', currentPage === page ? 'active' : '']">
                {{ page }}
              </button>
            </div>
            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="pagination-arrow disabled:opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p class="mt-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            Displaying Page {{ currentPage }} of {{ totalPages }}
          </p>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";

export default {
  name: "NewsPage",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      news: [],
      currentPage: 1,
      totalPages: 1,
      totalCount: 0,
      pageSize: 3,
      loading: false
    };
  },
  async mounted() {
    await this.fetchNews();
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      try {
        const params = {
          page: this.currentPage,
          page_size: this.pageSize
        };
        const response = await this.$apiGet('/news', params);
        this.news = response.data;
        this.totalPages = response.total_pages;
        this.totalCount = response.count;
        this.currentPage = response.current_page;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        this.loading = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchNews();
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
  }
};
</script>

<style scoped>
.pagination-arrow {
  @apply p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300;
}
.page-btn {
  @apply w-12 h-12 rounded-xl font-black text-sm transition-all duration-300 border border-slate-200 bg-white text-slate-500 hover:border-orange-500 hover:text-orange-500;
}
.page-btn.active {
  @apply bg-orange-500 border-orange-500 text-white shadow-xl shadow-orange-200;
}
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>