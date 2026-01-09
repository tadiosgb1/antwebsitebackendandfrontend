<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="text-center mb-20 animate-header">
        <h2 class="text-orange-600 font-black uppercase tracking-[0.4em] text-xs mb-4">Feedback</h2>
        <h3 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">Trusted Partnerships</h3>
        <p class="text-slate-500 mt-6 max-w-2xl mx-auto text-lg font-medium">
          Voices from the leaders who are scaling their businesses using the Ant platform.
        </p>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="h-64 bg-slate-50 rounded-3xl animate-pulse border border-slate-100"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <div 
          v-for="(item, index) in testimonials" 
          :key="item.id"
          class="testimonial-card group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] hover:border-orange-200 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col"
          :style="{ '--delay': `${index * 0.2}s` }"
        >
          <div class="absolute top-6 right-8 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <svg class="w-24 h-24 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H15.017C15.5693 5 16.017 5.44772 16.017 6V7C16.017 7.55228 16.4647 8 17.017 8H18.017C20.2261 8 22.017 9.79086 22.017 12V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H4.01697C3.46468 8 3.01697 8.44772 3.01697 9V12C3.01697 12.5523 2.56925 13 2.01697 13H0.0169678C-0.535317 13 -0.983032 12.5523 -0.983032 12V9C-0.983032 6.79086 0.807823 5 3.01697 5H4.01697C4.56925 5 5.01697 5.44772 5.01697 6V7C5.01697 7.55228 5.46468 8 6.01697 8H7.01697C9.22611 8 11.017 9.79086 11.017 12V15C11.017 18.3137 8.33068 21 5.01697 21H3.01697Z"/></svg>
          </div>

          <div class="flex space-x-1 mb-6">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-orange-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>

          <div class="relative z-10 flex-grow">
            <p class="text-lg text-slate-700 leading-relaxed mb-8 font-medium">
              “{{ item.content }}”
            </p>
          </div>

          <div class="flex items-center pt-8 border-t border-slate-50 mt-auto">
            <div class="relative shrink-0">
              <img v-if="item.avatar" :src="item.avatar" class="w-14 h-14 rounded-full object-cover shadow-md" />
              <div 
                v-else 
                class="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg"
                :class="getAvatarColor(index)"
              >
                {{ getInitials(item.name) }}
              </div>
              <div class="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1 ring-4 ring-white">
                <svg class="w-2 h-2 fill-current" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
              </div>
            </div>

            <div class="ml-4 text-left">
              <h4 class="text-slate-900 font-black text-base tracking-tight leading-none">{{ item.name }}</h4>
              <p class="text-orange-600 font-bold text-[10px] uppercase tracking-widest mt-1.5 px-2 py-0.5 bg-orange-50 rounded-md inline-block">
                {{ item.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialComp",
  data() { return { testimonials: [], loading: false }; },
  async mounted() { await this.fetchTestimonials(); },
  methods: {
    async fetchTestimonials() {
      this.loading = true;
      try {
        const response = await this.$apiGet('/testimonial', { page: 1, page_size: 10 });
        this.testimonials = response.data;
      } catch (err) { console.error(err); } finally { this.loading = false; }
    },
    getInitials(name) {
      if (!name) return "A";
      const parts = name.trim().split(" ");
      return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0][0].toUpperCase();
    },
    getAvatarColor(index) {
      const colors = [
        'bg-slate-900',
        'bg-orange-500',
        'bg-blue-600',
        'bg-emerald-600'
      ];
      return colors[index % colors.length];
    }
  }
};
</script>

<style scoped>
.testimonial-card {
  opacity: 0;
  transform: scale(0.95) translateY(40px);
  animation: cardReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes cardReveal {
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-header {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Make text wrap beautifully */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>