<template>
  <section class="py-24 bg-slate-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 border-l-8 border-orange-500 pl-8 animate-header">
        <div>
          <h2 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-2">Our Experts</h2>
          <h3 class="text-5xl font-black text-slate-900 tracking-tighter italic">The Team Driving Innovation</h3>
        </div>
        <p class="text-slate-500 max-w-sm mt-4 md:mt-0 font-medium italic">
          Meet the specialized minds building the future of Ethiopian B2B commerce.
        </p>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="i in 3" :key="i" class="bg-white rounded-[2.5rem] h-[550px] animate-pulse shadow-sm"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <article 
          v-for="(member, index) in team" 
          :key="member.id" 
          class="team-card group bg-white rounded-[2.5rem] border border-slate-100 p-4 shadow-sm hover:shadow-2xl transition-all duration-700"
          :style="{ '--delay': `${index * 0.15}s` }"
        >
          <div class="relative h-[400px] overflow-hidden rounded-[2rem] bg-slate-200">
            <img 
              v-if="member.photo"
              :src="member.photo" 
              :alt="member.name"
              class="w-full h-full object-cover transition-transform duration-1000 scale-110 group-hover:scale-100"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 font-black text-4xl">
              {{ getInitials(member.name) }}
            </div>

            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl space-x-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="social-icon hover:text-[#0077b5]"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a v-if="member.telegram" :href="member.telegram" target="_blank" class="social-icon hover:text-[#229ED9]"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 8.874l-4.45 9.03c-.131.265-.41.428-.71.428h-.002c-.3-.001-.579-.166-.708-.432l-2.015-4.135-2.022-1.094c-.265-.143-.427-.423-.415-.724s.198-.567.478-.682l8.916-3.693c.312-.128.67-.035.882.23s.215.632.046.922z"/></svg></a>
              <a v-if="member.twitter" :href="member.twitter" target="_blank" class="social-icon hover:text-[#1DA1F2]"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
            </div>
          </div>

          <div class="p-8">
            <h4 class="text-2xl font-black text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
              {{ member.name }}
            </h4>
            <p class="text-sm font-black text-orange-600 uppercase tracking-widest mt-1">
              {{ member.role }}
            </p>
            <p class="mt-4 text-slate-500 text-sm leading-relaxed line-clamp-3 italic opacity-80 group-hover:opacity-100 transition-opacity">
              {{ member.description || getDefaultDescription(member.name, member.role) }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "TeamComp",
  data() { return { team: [], loading: false }; },
  async mounted() { await this.fetchTeam(); },
  methods: {
    async fetchTeam() {
      this.loading = true;
      try {
        const response = await this.$apiGet('/team', { page: 1, page_size: 10 });
        this.team = response.data;
      } catch (err) { console.error(err); } finally { this.loading = false; }
    },
    getInitials(name) { return name ? name.split(" ").map(n => n[0]).join("").toUpperCase() : "A"; },
    getDefaultDescription(name, role) {
      const first = name.split(" ")[0];
      return `${first} is a visionary leader at Ant, dedicated to transforming Ethiopia's B2B landscape through expert ${role.toLowerCase()} strategies and innovation.`;
    }
  }
};
</script>

<style scoped>
/* Staggered Zoom-In Entry Animation */
.team-card {
  opacity: 0;
  transform: scale(0.9) translateY(40px);
  animation: zoomReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes zoomReveal {
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Header Animation */
.animate-header {
  animation: slideRight 1s ease-out forwards;
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Hover Zoom Out Effect on Image */
.group:hover img {
  transform: scale(1); /* Settles from 1.1 to 1 */
}

/* Social Icon Styling */
.social-icon {
  @apply text-slate-400 transition-all duration-300 hover:scale-125;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>