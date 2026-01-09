<template>
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="mb-12 border-l-4 border-orange-500 pl-6 animate-fade-in">
        <h2 class="text-4xl font-black text-slate-900 tracking-tight italic">Upcoming Events</h2>
        <p class="text-slate-500 mt-2 text-lg font-medium">Join us at our next industry-leading gathering.</p>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="i in 3" :key="i" class="bg-white rounded-3xl h-80 animate-pulse border border-slate-200"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <article 
          v-for="event in featuredEvents" 
          :key="event.id" 
          class="group bg-white  border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
        >
          <div class="relative h-48 overflow-hidden bg-slate-900">
            <img 
              v-if="event.image"
              :src="event.image" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center p-6 text-center">
              <span class="text-gray-400 font-black text-xs uppercase tracking-widest">{{ event.title }}</span>
            </div>

            <div class="absolute top-0 right-0 bg-white px-4 py-2 rounded-bl-2xl shadow-md text-center">
              <span class="block text-[10px] font-black text-orange-500 uppercase">{{ formatMonth(event.start_date) }}</span>
              <span class="block text-xl font-black text-slate-900">{{ formatDay(event.start_date) }}</span>
            </div>
          </div>

          <div class="p-8 flex-grow flex flex-col">
            <div class="mb-3">
              <span class="text-[10px] font-black uppercase tracking-[0.15em] text-orange-600 bg-orange-50 px-2 py-1 rounded">
                {{ event.Category ? event.Category.name : 'General' }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
              {{ event.title }}
            </h3>
            
            <p class="text-slate-500 mt-4 line-clamp-2 text-sm leading-relaxed">
              {{ event.description }}
            </p>

            <div v-if="event.video" class="mt-4 flex items-center text-slate-400">
               <div class="bg-slate-100 p-1.5 rounded-full mr-2">
                 <svg class="w-3 h-3 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
               </div>
               <span class="text-[10px] font-bold uppercase tracking-wider">Watch Highlights</span>
            </div>

            <div class="mt-auto pt-8">
              <router-link :to="`/events/${event.id}`" class="flex items-center text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-orange-500 transition-all">
                Event Details
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
          </div>
        </article>
      </div>

      <div class="flex justify-center">
        <router-link 
          to="/events" 
          class="group relative inline-flex items-center px-12 py-4 border-2 border-slate-900 rounded-full overflow-hidden transition-all hover:bg-slate-900 text-slate-900 hover:text-white"
        >
          <span class="relative z-10 text-xs font-black uppercase tracking-[0.2em]">View All Events</span>
          <div class="ml-4 relative z-10">
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "EventComp",
  data() {
    return {
      events: [],
      loading: false
    };
  },
  computed: {
    // Limits the list to exactly 3 for the home page layout
    featuredEvents() {
      return this.events.slice(0, 3);
    }
  },
  async mounted() {
    await this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      this.loading = true;
      try {
        // Optimized call: page 1, size 3
        const response = await this.$apiGet('/event', { page: 1, page_size: 3 });
        this.events = response.data;
      } catch (err) {
        console.error("Home Events Widget Error:", err);
      } finally {
        this.loading = false;
      }
    },
    formatMonth(d) {
      return new Date(d).toLocaleDateString('en-US', { month: 'short' });
    },
    formatDay(d) {
      return new Date(d).getDate();
    }
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>