<template>
  <div class="flex flex-col min-h-screen bg-slate-50">
    <Header />

     <section class="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
  <div class="absolute top-0 left-0 w-1/2 h-full bg-slate-900/5 skew-x-12 -translate-x-1/4"></div>
  
  <div class="max-w-7xl mx-auto relative z-10">
    <div class="max-w-3xl">
      <h1 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6 animate-slide-up">
        Global Network
      </h1>
      <h2 class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter italic leading-none animate-slide-up" style="animation-delay: 0.1s">
        Connect with <span class="text-orange-500">Industry</span> Leaders.
      </h2>
      <p class="mt-8 text-xl text-slate-600 font-medium leading-relaxed animate-slide-up" style="animation-delay: 0.2s">
        Join our exclusive summits, webinars, and networking expos designed to bridge the gap between innovation and commerce.
      </p>
    </div>
  </div>
</section>


    <main class="flex-grow pt-24 pb-16 px-6">
      <div class="max-w-7xl mx-auto">
        
      

        <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="i in 4" :key="i" class="bg-white rounded-3xl h-64 animate-pulse border border-slate-200"></div>
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <article 
            v-for="event in events" 
            :key="event.id" 
            class="group bg-white  border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
          >
            <div class="relative w-full md:w-52 lg:w-64 h-64 md:h-auto overflow-hidden bg-slate-900">
              <img 
                v-if="event.image"
                :src="event.image" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center p-4 text-center">
                <span class="text-gray-400 font-black text-xs uppercase tracking-tighter">{{ event.title }}</span>
              </div>

              <div class="absolute top-0 left-0 bg-orange-500 text-white p-3 rounded-br-2xl shadow-lg flex flex-col items-center min-w-[60px]">
                <span class="text-xs font-bold uppercase">{{ formatMonth(event.start_date) }}</span>
                <span class="text-2xl font-black">{{ formatDay(event.start_date) }}</span>
              </div>
            </div>

            <div class="p-8 flex-grow flex flex-col">
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                  {{ event.Category ? event.Category.name : 'General Event' }}
                </span>
                <span v-if="isUpcoming(event.start_date)" class="flex items-center text-orange-600 text-[10px] font-black uppercase">
                  <span class="w-2 h-2 bg-orange-500 rounded-full animate-ping mr-2"></span>
                  Upcoming
                </span>
              </div>

              <h3 class="text-2xl font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                {{ event.title }}
              </h3>
              
              <p class="text-slate-500 mt-3 line-clamp-2 text-sm leading-relaxed">
                {{ event.description }}
              </p>

              <div v-if="event.video" class="mt-4 flex items-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                <div class="w-16 h-10 rounded-lg overflow-hidden bg-black relative flex-shrink-0">
                   <video :src="event.video" class="w-full h-full object-cover opacity-60"></video>
                   <div class="absolute inset-0 flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
                <span class="ml-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Video Highlights Available</span>
              </div>

              <div class="mt-auto pt-6 flex items-center justify-between">
                <div class="flex items-center text-slate-400 text-xs font-medium">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {{ formatFullDate(event.start_date) }}
                </div>
                
                <router-link :to="`/events/${event.id}`" class="p-2 bg-slate-900 text-white rounded-full hover:bg-orange-500 transition-colors shadow-lg">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <div v-if="totalPages > 1" class="flex flex-col items-center pt-10 border-t border-slate-200">
          <div class="flex items-center space-x-3">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="pagination-arrow disabled:opacity-20">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div class="flex items-center space-x-2">
              <button 
                v-for="page in totalPages" :key="page"
                @click="changePage(page)"
                :class="['page-btn', currentPage === page ? 'active' : '']"
              >
                {{ page }}
              </button>
            </div>

            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="pagination-arrow disabled:opacity-20">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <p class="mt-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Showing {{ events.length }} of {{ totalCount }} Events</p>
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
  name: "EventsPage",
  components: { Header, Footer },
  data() {
    return {
      events: [],
      currentPage: 1,
      totalPages: 1,
      totalCount: 0,
      pageSize: 4,
      loading: false
    };
  },
  async mounted() {
    await this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      this.loading = true;
      try {
        const params = { page: this.currentPage, page_size: this.pageSize };
        const response = await this.$apiGet('/event', params);
        
        this.events = response.data;
        this.totalPages = response.total_pages;
        this.totalCount = response.count;
        this.currentPage = response.current_page;
      } catch (err) {
        console.error("Events Fetch Error:", err);
      } finally {
        this.loading = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    changePage(p) {
      if (p >= 1 && p <= this.totalPages) {
        this.currentPage = p;
        this.fetchEvents();
      }
    },
    // Helper Formatters
    formatMonth(d) { return new Date(d).toLocaleDateString('en-US', { month: 'short' }); },
    formatDay(d) { return new Date(d).getDate(); },
    formatFullDate(d) { return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); },
    isUpcoming(d) { return new Date(d) > new Date(); }
  }
};
</script>

<style scoped>
.pagination-arrow { @apply p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300; }
.page-btn { @apply w-12 h-12 rounded-xl font-black text-sm transition-all duration-300 border border-slate-200 bg-white text-slate-500 hover:border-orange-500 hover:text-orange-500; }
.page-btn.active { @apply bg-orange-500 border-orange-500 text-white shadow-xl shadow-orange-200; }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.animate-fade-in { animation: fadeIn 0.6s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>