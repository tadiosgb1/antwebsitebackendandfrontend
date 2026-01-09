<template>
  <div class="min-h-screen bg-white">
    <Header />

    <section class="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 translate-x-1/4"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6 animate-fade-in">Careers at Ant</h1>
          <h2 class="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter italic leading-none">
            Build the <span class="text-orange-500 text-shadow">Infrastructure</span> of Tomorrow.
          </h2>
          <p class="mt-8 text-xl text-slate-600 font-medium leading-relaxed">
            We are looking for builders, thinkers, and disruptors to join our mission in transforming the B2B landscape in East Africa.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-5xl mx-auto">
        
        <div class="flex items-center justify-between mb-12 pb-6 border-b border-slate-100">
          <h3 class="text-lg font-black text-slate-900 italic">Open Positions ({{ jobs.length }})</h3>
          <div class="flex space-x-2">
            <span class="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">All Departments</span>
          </div>
        </div>

        <div v-if="loading" class="space-y-6">
          <div v-for="i in 2" :key="i" class="h-40 bg-slate-50 rounded-[2rem] animate-pulse"></div>
        </div>

        <div v-else-if="jobs.length === 0" class="text-center py-20">
          <p class="text-slate-400 font-medium">No current openings. Follow us for updates!</p>
        </div>

        <div v-else class="space-y-6">
          <div 
            v-for="(job, index) in jobs" 
            :key="job.id"
            class="job-card group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:border-orange-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              <div class="flex-grow space-y-4">
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-orange-50 text-orange-600 text-[9px] font-black uppercase tracking-widest rounded-lg">
                    {{ job.employment_type.replace('_', ' ') }}
                  </span>
                  <span class="px-3 py-1 bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest rounded-lg">
                    {{ job.experience_level }} Level
                  </span>
                  <span class="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest rounded-lg">
                    {{ job.location }}
                  </span>
                </div>

                <h4 class="text-3xl font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                  {{ job.title }}
                </h4>
                
                <p class="text-slate-500 font-medium line-clamp-2 max-w-2xl">
                  {{ job.description }}
                </p>

                <div class="flex items-center space-x-6 pt-2">
                  <div class="flex items-center text-slate-400 text-xs font-bold">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    ${{ formatSalary(job.salary_min) }} — ${{ formatSalary(job.salary_max) }}
                  </div>
                  <div class="flex items-center text-rose-500 text-xs font-black uppercase tracking-tighter">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Expires: {{ formatDate(job.deadline) }}
                  </div>
                </div>
              </div>

              <div class="shrink-0">
                <router-link 
                  :to="`/jobs/${job.id}`"
                  class="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20 active:scale-95"
                >
                  Apply Now
                </router-link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="pb-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="bg-orange-500 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
           <div class="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
           <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div class="text-center md:text-left">
                <h3 class="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-none mb-4">Not finding your fit?</h3>
                <p class="text-white/80 font-bold">Send us an open application and we'll keep you in mind.</p>
              </div>
              <router-link to="/contact" class="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                General Application
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
  name: "JobsPage",
  components: { Header, Footer },
  data() {
    return {
      jobs: [],
      loading: false
    };
  },
  async mounted() {
    await this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      this.loading = true;
      try {
        const response = await this.$apiGet('/jobposts');
        this.jobs = response.data;
      } catch (err) {
        console.error("Jobs Fetch Error:", err);
      } finally {
        this.loading = false;
      }
    },
    formatSalary(val) {
      return (val / 1000).toFixed(0) + 'k';
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  }
};
</script>

<style scoped>
.job-card {
  opacity: 0;
  transform: translateY(20px);
  animation: slideIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes slideIn {
  to { opacity: 1; transform: translateY(0); }
}

.text-shadow {
  text-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
}
</style>