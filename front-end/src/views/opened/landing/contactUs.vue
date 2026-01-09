<template>
  <div class="min-h-screen bg-white">
    <Header />

    <main class="pt-32 pb-24 px-6">
      <div class="max-w-7xl mx-auto">
        
        <div class="mb-20 animate-fade-in">
          <h1 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-4">Contact</h1>
          <h2 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter italic leading-tight">
            Ready to <span class="text-orange-500">Amplify</span> <br />Your Business?
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div class="lg:col-span-4 space-y-12">
            <p class="text-xl text-slate-500 font-medium leading-relaxed">
              Whether you're a startup or an enterprise, Ant provides the tools to manage your B2B ecosystem with precision.
            </p>

            <div class="space-y-10">
              <div class="group flex items-start">
                <div class="w-12 h-12 bg-slate-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div class="ml-6">
                  <h4 class="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Email</h4>
                  <p class="text-lg font-bold text-slate-900">hello@ant-b2b.com</p>
                </div>
              </div>

              <div class="group flex items-start">
                <div class="w-12 h-12 bg-slate-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div class="ml-6">
                  <h4 class="text-[10px] font-black uppercase tracking-widest text-slate-400">Our Location</h4>
                  <p class="text-lg font-bold text-slate-900">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-8">
            <div class="bg-slate-50 rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-sm relative overflow-hidden">
              <form @submit.prevent="submitContact" class="relative z-10 space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-3">
                    <label class="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">Your Full Name</label>
                    <input 
                      v-model="form.name" 
                      type="text" 
                      placeholder="e.g. Tadesse Berhe"
                      required
                      class="w-full bg-white rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-900 shadow-sm"
                    />
                  </div>
                  <div class="space-y-3">
                    <label class="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">Email Address</label>
                    <input 
                      v-model="form.email" 
                      type="email" 
                      placeholder="name@company.com"
                      required
                      class="w-full bg-white rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-900 shadow-sm"
                    />
                  </div>
                </div>

                <div class="space-y-3">
                  <label class="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">Phone Number (Optional)</label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    placeholder="+251 ..."
                    class="w-full bg-white rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-900 shadow-sm"
                  />
                </div>

                <div class="space-y-3">
                  <label class="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">Message</label>
                  <textarea 
                    v-model="form.message" 
                    rows="6" 
                    placeholder="Tell us about your business goals..."
                    required
                    class="w-full bg-white rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-900 shadow-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  :disabled="loading"
                  class="group w-full md:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/30 active:scale-95 disabled:opacity-50"
                >
                  <div class="flex items-center justify-center">
                    <span v-if="!loading">Initialize Contact</span>
                    <span v-else class="flex items-center">
                      <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </span>
                    <svg v-if="!loading" class="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </button>

                <transition name="fade">
                  <p v-if="feedback" class="mt-4 text-center font-bold italic" :class="isError ? 'text-red-500' : 'text-orange-600'">
                    {{ feedback }}
                  </p>
                </transition>
              </form>
            </div>
          </div>
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
  name: "ContactPage",
  components: {
    Header,
    Footer
  },
  props: ['data'], // Accepting data if passed from a parent
  data() {
    return {
      loading: false,
      feedback: '',
      isError: false,
      form: {
        name: this.data?.name || '',
        email: this.data?.email || '',
        phone: this.data?.phone || '',
        message: this.data?.message || ''
      }
    };
  },
  methods: {
    async submitContact() {
      this.loading = true;
      this.feedback = '';
      this.isError = false;
      
      try {
        // As requested: using this.$apiPost
        const res = await this.$apiPost("/contact", this.form);
        
        if (res) {
          this.feedback = "Transmission Successful. Our team will reach out shortly.";
          this.resetForm();
        }
      } catch (error) {
        this.isError = true;
        this.feedback = "System Error: Please check your connection and try again.";
        console.error("Post Error:", error);
      } finally {
        this.loading = false;
        // Auto-hide feedback after 6 seconds
        setTimeout(() => { this.feedback = ''; }, 6000);
      }
    },
    resetForm() {
      this.form = { name: '', email: '', phone: '', message: '' };
    }
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>