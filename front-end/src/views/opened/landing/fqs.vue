<template>
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-orange-600 font-black uppercase tracking-[0.5em] text-xs mb-4">Support Center</h2>
        <h3 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic">Frequently Asked Questions</h3>
        <p class="text-slate-500 mt-6 text-lg font-medium">
          Everything you need to know about the Ant B2B ecosystem.
        </p>
      </div>

      <div class="space-y-4">
        <div v-if="loading" class="space-y-4">
          <div v-for="i in 3" :key="i" class="h-20 bg-slate-50 rounded-3xl animate-pulse"></div>
        </div>

        <div 
          v-else
          v-for="(faq, index) in faqs" 
          :key="faq.id"
          class="group border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-orange-200"
          :class="activeIndex === index ? 'bg-slate-50 border-orange-200 shadow-lg' : 'bg-white'"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-8 text-left focus:outline-none"
          >
            <span 
              class="text-lg font-bold transition-colors duration-300"
              :class="activeIndex === index ? 'text-orange-600' : 'text-slate-900'"
            >
              {{ faq.question }}
            </span>
            
            <div 
              class="flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
              :class="activeIndex === index ? 'bg-orange-500 text-white rotate-180' : 'bg-slate-100 text-slate-400'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div 
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="activeIndex === index ? `max-height: ${contentHeights[index]}px` : 'max-height: 0px'"
          >
            <div :ref="`content-${index}`" class="p-8 pt-0 text-slate-600 leading-relaxed text-base">
              <div class="h-px w-full bg-slate-200 mb-6"></div>
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 p-10 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-orange-500/20"></div>
        
        <h4 class="text-white font-black text-2xl mb-2 italic">Still have more questions?</h4>
        <p class="text-slate-400 text-sm mb-8">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        
        <router-link 
          to="/contact-us" 
          class="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1"
        >
          Contact Support
          <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "FaqComp",
  data() {
    return {
      faqs: [],
      loading: false,
      activeIndex: null,
      contentHeights: {}
    };
  },
  async mounted() {
    await this.fetchFaqs();
  },
  methods: {
    async fetchFaqs() {
      this.loading = true;
      try {
        const response = await this.$apiGet('/faqs', { page: 1, page_size: 10 });
        this.faqs = response.data;
        
        // Initialize heights after DOM updates
        this.$nextTick(() => {
          this.calculateHeights();
        });
      } catch (err) {
        console.error("FAQ Error:", err);
      } finally {
        this.loading = false;
      }
    },
    calculateHeights() {
      this.faqs.forEach((_, index) => {
        const el = this.$refs[`content-${index}`];
        if (el && el[0]) {
          this.contentHeights[index] = el[0].scrollHeight;
        }
      });
    },
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Ensure smooth transition for height */
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>